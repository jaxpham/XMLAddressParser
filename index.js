var https = require('https');
const xml2js = require ('xml2js');
var parser = new xml2js.Parser();
var concat = require('concat-stream');

parser.on('error', function(err) { console.log('Parser error', err); });


https.get('https://s3.amazonaws.com/abodo-misc/sample_abodo_feed.xml', function(resp) {

  resp.on('error', function(err) {
    console.log('Error while reading', err);
  });

  let properties = [];

  let madisonProperties = [];

  resp.pipe(concat(function(buffer) {
    var str = buffer.toString();
    parser.parseString(str, function(err, result) {
      // console.log('Finished parsing:', err, result);

      let allProperties = result.PhysicalProperty.Property;
      // Gets all properties
      // console.log(result.PhysicalProperty)

      for (let i = 0; i < allProperties.length; i++) {
        let propertyId = allProperties[i].PropertyID;
        // Gets all
        // console.log(propertyId)

        for (let j = 0; j < propertyId.length; j++) {
          let address = propertyId[j].Address;

          for (let k = 0; k < address.length; k++) {
            //MN and WI Madison zipcodes
            // console.log(address[k]);
            if (address[k].City[0].toLowerCase() === 'madison') {
              madisonProperties.push(allProperties[i]);
            }
          }
        }
      }


      for (let i = 0; i < madisonProperties.length; i++) {
        let madPropertyId = madisonProperties[i].PropertyID;

        let property = {
          property_id: null,
          name: null,
          email: null
        };

        for(let j = 0; j < madPropertyId.length; j++) {
          let madIdentification = madPropertyId[j].Identification;
          let madName = madPropertyId[j].MarketingName[0];
          let madEmail = madPropertyId[j].Email[0];

          for (let k = 0; k < madIdentification.length; k++) {

            let madIDValue = madIdentification[k].$.IDValue
            property.property_id = madIDValue;
            property.name = madName
            property.email = madEmail
          }
        }
        properties.push(property)
      }
    });
    console.log(properties)
  }));
});


