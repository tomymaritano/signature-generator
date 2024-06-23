import React, { useState } from 'react';

function SignatureGenerator() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');

  return (
    <div>
      <form>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
        <input type="text" placeholder="LinkedIn Profile" value={linkedin} onChange={e => setLinkedin(e.target.value)} />
      </form>
      <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <strong>{name}</strong><br />
        Email: <a href={`mailto:${email}`}>{email}</a><br />
        Phone: {phone}<br />
        LinkedIn: <a href={linkedin}>{linkedin}</a>
      </div>
      
    </div>
  );
}

export default SignatureGenerator;
