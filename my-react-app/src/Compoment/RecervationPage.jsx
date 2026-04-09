import { useState } from "react";

function RecervationPage() {
   const [name, setName] = useState("");
   const [reason, setReason] = useState("");
   const [date, setDate] = useState("");
   const [people, setPeople] = useState("");
   const [phone, setPhone] = useState("");

   function handleSubmit(event) {
      event.preventDefault();

      // Show summary
      alert(
         `Reservation details:\nName: ${name}\nReason: ${reason}\nDate: ${date}\nPeople: ${people}\nPhone: ${phone}`
      );

      // Clear all fields (reset to empty strings)
      setName("");
      setReason("");
      setDate("");
      setPeople("");
      setPhone("");
   }

   return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
         <div className="w-full max-w-md bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-semibold mb-4">Reservation Page</h1>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
               <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                     type="text"
                     name="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className="mt-1 block w-full border rounded p-2"
                     placeholder="Your full name"
                     required
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700">Reason</label>
                  <input
                     type="text"
                     name="reason"
                     value={reason}
                     onChange={(e) => setReason(e.target.value)}
                     className="mt-1 block w-full border rounded p-2"
                     placeholder="Reason for reservation"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                     type="date"
                     name="date"
                     value={date}
                     onChange={(e) => setDate(e.target.value)}
                     className="mt-1 block w-full border rounded p-2"
                     required
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700">Number of people</label>
                  <input
                     type="number"
                     name="people"
                     value={people}
                     onChange={(e) => setPeople(e.target.value)}
                     className="mt-1 block w-full border rounded p-2"
                     min="1"
                     placeholder="Number of people"
                     required
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700">Phone number</label>
                  <input
                     type="tel"
                     name="phone"
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                     className="mt-1 block w-full border rounded p-2"
                     placeholder="e.g. +1 555 555 5555"
                  />
               </div>

               <div className="text-right">
                  <button
                     type="submit"
                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                     Reserve
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default RecervationPage;