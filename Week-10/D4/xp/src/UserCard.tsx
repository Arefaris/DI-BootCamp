interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

const UserCard = ({ name = "Guest", age = 0, role = "User" }: UserCardProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius: '8px' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
};

export default UserCard;