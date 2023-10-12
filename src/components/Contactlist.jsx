import ContactRow from "./ContactRow";
import { useState, useEffect } from 'react';

export default function ContactList({ selectedContactId, setSelectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

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
