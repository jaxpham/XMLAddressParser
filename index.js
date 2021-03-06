var https = require('https');
const xml2js = require ('xml2js');
var parser = new xml2js.Parser();
var concat = require('concat-stream');

parser.on('error', function(err) { console.log('Parser error', err); });

const getPropertyByCity = (city) => {
  https.get('https://s3.amazonaws.com/abodo-misc/sample_abodo_feed.xml', function(resp) {

    resp.on('error', function(err) {
      console.log('Error while reading', err);
    });

    let properties = [];

    let cityProperties = [];

    resp.pipe(concat(function(buffer) {
      var str = buffer.toString();
      parser.parseString(str, function(err, result) {
        // console.log('Finished parsing:', err, result);

        let allProperties = result.PhysicalProperty.Property;
        // Gets all properties
        // console.log(allProperties)

        for (let i = 0; i < allProperties.length; i++) {
          let propertyId = allProperties[i].PropertyID;
          // Gets all propertyId
          // console.log(propertyId[i])

          for (let j = 0; j < propertyId.length; j++) {
            let address = propertyId[j].Address;

            for (let k = 0; k < address.length; k++) {
              //All adresses
              // console.log(address);

              if (address[k].City[0].toLowerCase() === `${city}`.toLowerCase()) {
                cityProperties.push(allProperties[i]);
              }
            }
          }
        }
        // Check for the specific city properties
        // console.log(cityProperties)

        for (let i = 0; i < cityProperties.length; i++) {

          let property = {
            property_id: null,
            name: null,
            email: null,
            bedrooms: null || 0
          };

          let cityPropertyId = cityProperties[i].PropertyID;

          for(let j = 0; j < cityPropertyId.length; j++) {
            let cityIdentification = cityPropertyId[j].Identification;
            let cityName = cityPropertyId[j].MarketingName[0];
            let cityEmail = cityPropertyId[j].Email[0];

            for (let k = 0; k < cityIdentification.length; k++) {

              let cityIDValue = cityIdentification[k].$.IDValue
              property.property_id = cityIDValue;
              property.name = cityName
              property.email = cityEmail
            }
          }

          let cityPropertiesFloorPlans = cityProperties[i].Floorplan

          for (l = 0; l < cityPropertiesFloorPlans.length; l++) {
            let cityPropertiesRooms = cityPropertiesFloorPlans[l].Room;
            let cityPropertiesUnitCount = cityPropertiesFloorPlans[l].UnitCount[0]

            //UnitCounts
            // console.log(cityPropertiesUnitCount)

            for (m = 0; m < cityPropertiesRooms.length; m++) {
              let cityPropertiesRoomTypes = cityPropertiesRooms[m];
              //All Rooms from
              // console.log(cityPropertiesRoomTypes)

              if(cityPropertiesRoomTypes.$.RoomType.toLowerCase() === 'bedroom') {

                property.bedrooms+= (Number(cityPropertiesRoomTypes.Count[0] * cityPropertiesUnitCount));
              }
            }
          }
          properties.push(property)
        }
      });
      console.log(properties)
    }));
  });
}

getPropertyByCity('MadiSon')