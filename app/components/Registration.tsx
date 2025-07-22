import React from 'react';

type Props = {};

const registration = {
  "earlyBirdRegistration": "19th Nov 2024",
  "lateRegistrationFee": "There is an additional late registration fee of INR 1000 (for Indian participants) or US $50 (for foreign Participants) for attendees who register for the conference after 19th Nov 2024.",
}

const page = (props: Props) => {
  return (
    <section
      id="registration"
      className="w-full text-left flex flex-col justify-center items-center"
    >
          <div className="w-full flex justify-center">
        <img 
          src= "/my-image.jpg" 
          alt="Banner Details" 
          className="w-200xl md:w-200xl lg:w-200xl h-auto" 
        />
      </div>
      <h1 className="text-2xl sm:text-3xl mt-4 mb-6 font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Registration
      </h1>
      <div className="animate-pulse text-red-500">
          <h2 className="text-xl sm:text-2xl mb-4 font-bold tracking-tight text-red-900 dark:text-red-500">
            BuildSEC'24 Registration will open shortly...
          </h2>
        </div>
        <h2 className="text-xl sm:text-2xl mt-4 mb-6 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Registration Fees:
        </h2>
      <div className="w-full flex justify-center">
        <img 
          src= "/Reg.jpg" 
          alt="Registration Details" 
          className="w-3/4 md:w-1/2 lg:w-0.6 h-auto" 
        />
      </div>
      <div className="w-full text-left flex flex-col justify-center items-center">
        <h2 className="text-xl sm:text-2xl mt-4 mb-6 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Important Notes:
        </h2>
        <ul className="w-50 list-disc pl-5 justify-center items-center">
          <li>Early Bird Registration - {registration.earlyBirdRegistration}</li>
          <li>Late Registration Fee - {registration.lateRegistrationFee}</li>
        </ul>
        <h2 className="text-xl sm:text-2xl mt-4 mb-6 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Registration Procedure:
        </h2>
        <ol className="list-decimal pl-5 text-left">
          <li>Pay the Registration Fees following the procedure given below</li>
          <li>Note down the Transaction Reference Number and Take a Screenshot of the Payment details</li>
          <li>Fill up the Registration Form  - <a href="https://forms.gle/4KTtD3sax8os9aWJA" style={{ textDecoration: 'underline', color: 'blue' }}>link</a></li>
          <li>Upon successful submission you should get the confirmation e-mail</li>
        </ol>
        <h2 className="text-xl sm:text-2xl mt-4 mb-6 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Registration Fee Payment Details:
        </h2>
        <h3 className="text-lg sm:text-xl mt-4 mb-6 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Payment via Credit/Debit Cards/UPIs/Net Banking:
        </h3>
        <p className="text-left">Payment Link: <a href="https://payments.iiitd.edu.in/pg/fees/pg.html" style={{ textDecoration: 'underline', color: 'blue' }}>link</a> </p>


        <p className="text-left font-bold">Steps for the payment</p>
        <ol className="list-decimal pl-5 text-left">
          <li>Click on the Payment Link.</li>
          <li>Fill in your details</li>
          <li>Choose your Payment Category from the Dropdown list (Choose Indian or International)</li>
          <li>Fill up Payment Details and Proceed following the Instructions</li>
        </ol>

        <p className="text-gray-600 dark:text-gray-400 text-left">
          NOTE: We request the bank advice and/or transaction receipt for the foreign currency transaction from you to claim the amount in the Institute account (IIIT Delhi, Okhla Phase 3, New Delhi). Foreign remittance has become a complex issue over the last decade or so and, hence, the trouble. The Banks in India ask for relevant supporting documents ascertaining the purpose of funds and Foreign exchange regulatory declaration for us to credit the funds to the conference account.  Please also email bank advice and/or transaction receipt to <a href="mailto:buildsec2024iiitd@gmail.com" style={{ textDecoration: 'underline', color: 'blue' }}>buildsec2024iiitd@gmail.com</a>.

          
        </p>
      </div>
    </section>
  );
};

export default page;