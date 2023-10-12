import { useState, useEffect } from 'react';

export default function SelectedContact({ SelectedContact, setSelectedContactId}) {
  return (
    <div>
      {selectedContactId ? (
        <div>
          {/* Display selected contact information here */}
        </div>
      ) : (
        <p>Please select a contact from the list.</p>
      )}
    </div>
  );
}