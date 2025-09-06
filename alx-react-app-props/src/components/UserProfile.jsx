export default function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic' }}>{props.bio}</p>
    </div>
  );
}
