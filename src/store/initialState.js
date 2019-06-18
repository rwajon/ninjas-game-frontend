const user = require('../helpers/checkUser')();

module.exports = {
  game: {
    names: [],
    countries: [
      { name: 'Algeria', capital: 'Algiers' },
      { name: 'Angola', capital: 'Luanda' },
      { name: 'Benin', capital: 'Porto Novo' },
      { name: 'Botswana', capital: 'Gaborone' },
      { name: 'Burkina Faso', capital: 'Ouagadougou' },
      { name: 'Burundi', capital: 'Gitega' },
      { name: 'Cameroon', capital: 'Yaounde' },
      { name: 'Cape Verde', capital: 'Praia' },
      { name: 'Central African Republic', capital: 'Bangui' },
      { name: 'Chad', capital: "N'Djamena" },
      { name: 'Democratic Republic of the Congo', capital: 'Kinshasa' },
      { name: 'Djibouti', capital: 'Djibouti' },
      { name: 'Egypt', capital: 'Cairo' },
      { name: 'Equatorial Guinea', capital: 'Malabo' },
      { name: 'Eritrea', capital: 'Asmara' },
      { name: 'Ethiopia', capital: 'Addis Ababa' },
      { name: 'Gabon', capital: 'Libreville' },
      { name: 'Gambia', capital: 'Banjul' },
      { name: 'Ghana', capital: 'Accra' },
      { name: 'Guinea Bissau', capital: 'Bissau' },
      { name: 'Guinea', capital: 'Conakry' },
      { name: 'Ivory Coast', capital: '' },
      { name: 'Kenya', capital: 'Nairobi' },
      { name: 'Lesotho', capital: 'Maseru' },
      { name: 'Liberia', capital: 'Monrovia' },
      { name: 'Libya', capital: 'Tripoli' },
      { name: 'Madagascar', capital: 'Antananarivo' },
      { name: 'Malawi', capital: 'Lilongwe' },
      { name: 'Mali', capital: 'Bamako' },
      { name: 'Mauritania', capital: 'Nouakchott' },
      { name: 'Mauritius', capital: 'Port Louis' },
      { name: 'Morocco', capital: 'Rabat' },
      { name: 'Mozambique', capital: 'Maputo' },
      { name: 'Namibia', capital: 'Windhoek' },
      { name: 'Niger', capital: 'Niamey' },
      { name: 'Nigeria', capital: 'Abuja' },
      { name: 'Republic of the Congo', capital: 'Kinshasa' },
      { name: 'Rwanda', capital: 'Kigali' },
      { name: 'Senegal', capital: 'Dakar' },
      { name: 'Seychelles', capital: 'Victoria' },
      { name: 'Sierra Leone', capital: 'Freetown' },
      { name: 'Sao Tome and Principe', capital: 'São Tomé' },
      { name: 'Somalia', capital: 'Mogadishu' },
      { name: 'South Africa', capital: 'Pretoria' },
      { name: 'South Sudan', capital: 'Juba' },
      { name: 'North Sudan', capital: 'Khartoum' },
      { name: 'Eswatini', capital: 'Mbabane' },
      { name: 'Tanzania', capital: 'Dodoma' },
      { name: 'Togo', capital: 'Lomé' },
      { name: 'Tunisia', capital: 'Tunis' },
      { name: 'Uganda', capital: 'Kampala' },
      { name: 'Western Sahara', capital: '' },
      { name: 'Zambia', capital: 'Lusaka' },
      { name: 'Zimbabwe', capital: 'Harare' }
    ],
    answer: {}
  },
  user: {
    profile: user.profile,
    isAuth: user.isAuth,
    errors: null
  },
  levels: [
    { level: 'Geography', points: 1 },
    { level: 'Public Figures', points: 1 },
    { level: 'Programming Languages', points: 1 }
  ],
  results: [
    { name: 'John Doe', point: 0 },
    { name: 'Smill Carter', point: 0 },
    { name: 'John Doe', point: 1 },
    { name: 'John Doe', point: 0 }
  ]
  // results: [
  //   'correct', 'incorrect'
  // ]
};
