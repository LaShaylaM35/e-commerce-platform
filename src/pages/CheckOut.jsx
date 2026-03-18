import React from "react";

export const CheckOut = () => {
  return (
    <>
    <div className= "mt-50 mb-50 bg-pink-50 border border-transparent rounded-md py-8 px-8 flex items-center justify-center ">
   

<form className= "flex flex-col gap-4 w-80">

   <h2 className="text-2xl font-bold mb-6 text-center text-pink-800">
          Payment Details
        </h2>

        
           <div className="mb-4">
        <label for="cardName" class="block text-sm font-medium text-gray-700 mb-1">
          Cardholder Name
        </label>
        <input type="text" id="cardName" className="cardName" required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Jane Doe" />
      </div>

      
      <div className="mb-4">
        <label for="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <input type="text" id="cardNumber" className="cardNumber" required pattern="\d{16}"
          maxlength="16"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="XXXX XXXX XXXX XXXX" />
      </div>

    
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label for="expiry" className="block text-sm font-medium text-gray-700 mb-1">
            Expiration Date
          </label>
          <input type="text" id="expiry" className="expiry" required pattern="(0[1-9]|1[0-2])\/\d{2}"
            placeholder="MM/YY"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="flex-1">
          <label for="cvv" className="block text-sm font-medium text-gray-700 mb-1">
            CVV
          </label>
          <input type="password" id="cvv" className="cvv" required pattern="\d{3,4}" maxlength="4"
            placeholder="***"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      
      <button type="submit"
        className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
        Pay Now
      </button>
    

       
        

      </form>

</div>

    </>
  );
};
