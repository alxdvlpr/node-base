const sendMail = require('./libs/sendMail');

(async function () {

  const transportResponse = await sendMail({
    template:     'hello',
    subject:      'Привет',
    to:           'asdfasdf@asdfasdf.com',
    name:         'Sergey'
  });

  console.log(transportResponse);

})().catch(console.error);
