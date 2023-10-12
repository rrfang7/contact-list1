import ContactRow from "./ContactRow";
import { useState, useEffect } from 'react';

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];
export default function Contactlist() {
    const [contacts, setContacts] = useState(dummyContacts);
    useEffect (() => {
        async function fetchContacts() {
            try {
                const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
                const data = await response.json();
                setContacts(data)
            }
            catch (error) {
                console.error(error);
            }
        } 
        fetchContacts()
    }, []);
    

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users${selectedContactId}`);
        const result = await response.json();
        setSelectedContact(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSelectedContact();
  }, [selectedContactId]);

  console.log(selectedContact);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {selectedContact ? (
          <ContactRow
            key={selectedContact.id}
            contact={selectedContact}
            setSelectedContactId={setSelectedContactId}
          />
        ) : (
          <tr>
            <td colSpan="3">Loading selected contact...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
