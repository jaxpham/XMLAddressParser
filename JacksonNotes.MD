1. What is XML file?
  A. https://www.w3schools.com/xml/xml_whatis.asp

2. Should I use a parsing library or create custom parser?
(https://softwareengineering.stackexchange.com/questions/17824/should-i-use-a-parser-generator-or-should-i-roll-my-own-custom-lexer-and-parser)

    A. Custom Parser
      1. Need it NOW!
      2. Need parser to be fast
      3. Don't have to get a ton of complicated code to work.
      4. Easier to maintain

    B. Create own parser
      1. Custom parsers aren't very user (the end-user, not you) friendly. You typically can't give good error messages, nor can you provide error recovery
      2. Own parser you have complete control
      3. Performance
        A. Can be faster but only if you are able to write a good one.
      4. Education
        A. Learn more by writing custom parser

3. Parsing library
  1. https://www.npmjs.com/package/xml2js
    A. npm install xml2js
      1. How to parse from URL
        A. https://stackoverflow.com/questions/34007206/how-to-parse-xml-from-url-with-node

  2. Why can't I get full details?
    A. npm install concat-stream
      1. Writable stream that concatenates all the data from a stream and calls a callback with the result. Use this when you want to collect all the data from a stream into a single buffer.
      2. What is .pipe() and what does it do?
        a. .pipe() feeds a readable stream into a writable stream so that as the contents are incrementally read from the readable stream, they are automatically forwarded to the writable stream. It manages the reading from one stream and writing to another stream automatically for you.
          1. https://stackoverflow.com/questions/53130609/what-is-the-pipe-method-in-nodejs

3. Must be in Madison
  A. Check each properties' address city for Madison
    1. Must filter all properties for those that are only in Madison first
      1. PropertyId with the city Madison should be ["2222", "1111", "1111"]
      2. Note - Usually property_id should be unique but in this case there are two properties that have 1111. This means we need to do an ETL cleaning process


Layout of Properties
properties = [
  {
    '$': {
      IDValue: '2222',
      OrganizationName: 'ABODO',
      IDType: 'PropertyID',
      IDRank: 'primary',
      IDScopeType: 'sender'
    },
    PropertyID: [
      {
        '$': { AddressType: 'property' },
        AddressLine1: [ '957 7th Ave SW' ],
        City: [ 'Forest Lake' ],
        State: [ 'MN' ],
        PostalCode: [ '55025' ],
        Country: [ 'USA' ],
        CountyName: [ 'United States of America' ],
        UnparsedAddress: [ '957 7th Ave SW\nForest Lake, MN 55025' ]
      }
    ],
    ILS_Identification: [ [Object] ],
    Information: [ [Object] ],
    Fee: [ [Object] ],
    Amenity: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    Policy: [ [Object] ],
    Building: [ [Object] ],
    Floorplan: [
    {
        '$': {
          IDValue: '91',
          OrganizationName: 'ABODO',
          IDType: 'FloorplanID',
          IDRank: 'primary',
          IDScopeType: 'sender'
        },
        Name: [ 'Tahoe' ],
        Comment: [
          'This corner apartment offers a spacious and versatile living and dining combination space.  This home also features an abundance of closet and bedroom space.'
        ],
        UnitCount: [ '5' ],
        FloorplanAvailabilityURL: [
          'https://www.norhart.com/communities/minneapolis-st-paul/cedarwood-apartments/tahoe?src=abd'
        ],
        UnitsAvailable: [ '0' ],
        DisplayedUnitsAvailable: [ '0' ],
        Room: [
          {
            '$': { RoomType: 'Bedroom' }, \
            Count: [ '3.0' ],
            Comment: [ '' ]
          },
          ...
        ],
        SquareFeet: [ [Object] ],
        MarketRent: [ [Object] ],
        EffectiveRent: [ [Object] ],
        LeaseTerm: [ [Object] ],
        Deposit: [ [Object] ],
        Fee: [ [Object] ],
        Amenity: [
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object]
        ],
        File: [ [Object] ],
        Promotional: [ 'Heat, Water and Trash Included!' ]
    },
      {
        '$': {
          IDValue: '95',
          OrganizationName: 'ABODO',
          IDType: 'FloorplanID',
          IDRank: 'primary',
          IDScopeType: 'sender'
        },
        Name: [ 'Upgraded Tahoe' ],
        Comment: [
          'This modern corner apartment comes with granite countertops, stainless steel appliances, shaker-style cabinets, luxury vinyl plank floors, and accent walls.  It also features a spacious and versatile living and dining combination space.'
        ],
        UnitCount: [ '3' ],
        FloorplanAvailabilityURL: [
          'https://www.norhart.com/communities/minneapolis-st-paul/cedarwood-apartments/upgraded-tahoe?src=abd'
        ],
        UnitsAvailable: [ '0' ],
        DisplayedUnitsAvailable: [ '0' ],
        Room: [ [Object], [Object] ],
        SquareFeet: [ [Object] ],
        MarketRent: [ [Object] ],
        EffectiveRent: [ [Object] ],
        LeaseTerm: [ [Object] ],
        Deposit: [ [Object] ],
        Fee: [ [Object] ],
        Amenity: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ],
        File: [ [Object] ],
        Promotional: [ 'Heat, Water and Trash Included!' ]
      }
    ],
    ILS_Unit: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    Utility: [ [Object] ],
    File: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    Promotional: [ 'Heat, Water and Trash Included!' ]
  },
  ...
]


Extra Credit Goals
  1.Parse out the number of bedrooms
    A. Assumed total bedrooms = units * bedrooms
<Floorplan IDValue="95" OrganizationName="ABODO" IDType="FloorplanID" IDRank="primary" IDScopeType="sender">
<Name>Upgraded Tahoe</Name>
<Comment>This modern corner apartment comes with granite countertops, stainless steel appliances, shaker-style cabinets, luxury vinyl plank floors, and accent walls. It also features a spacious and versatile living and dining combination space.</Comment>
<UnitCount>3</UnitCount>
<FloorplanAvailabilityURL>https://www.norhart.com/communities/minneapolis-st-paul/cedarwood-apartments/upgraded-tahoe?src=abd</FloorplanAvailabilityURL>
<UnitsAvailable>0</UnitsAvailable>
<DisplayedUnitsAvailable>0</DisplayedUnitsAvailable>
<Room RoomType="Bedroom">
<Count>3.0</Count>
<Comment/>
</Room>
