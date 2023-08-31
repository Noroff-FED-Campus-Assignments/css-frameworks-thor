import { useUser } from "../../lib/my-api";
import profileImage from '../../assets/profileimg.png';

function ExampleProfile() {
  const userId = 2;
  const { status, error, data } = useUser(userId);
  const isLoading = status === "loading";

  // Mock data for contacts (replace this with actual data)
  const mockContacts = [
    { id: 1, name: "Contact 1" },
    { id: 2, name: "Contact 2" },
    // ... Add more contacts here
  ];

  // Mock user details (replace this with actual data)
  const userDetails = "Rid is 23 years old and enjoys sports.";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  console.log("user data >>>>", data);

  return (
    <div className="p-4 space-y-8">
      {/* Profile Image */}
      <div className="flex items-center space-x-4">
        <img src={profileImage} alt="Profile Image" className="w-20 h-20 rounded-full" />
        <div>
          <h1 className="text-2xl font-semibold">Rid</h1>
          <p className="text-gray-600">{userDetails}</p>
        </div>
      </div>

      {/* Contacts List */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Contacts</h2>
        <ul className="space-y-2">
          {mockContacts.map(contact => (
            <li key={contact.id} className="flex items-center space-x-2">
              <img src={profileImage} alt="Contact Image" className="w-12 h-12 rounded-full" />
              <span>{contact.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Post Form */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Post Something</h2>
        <form className="space-y-2">
          <textarea className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300" rows="3" placeholder="Write your post"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Post</button>
        </form>
      </div>
    </div>
  );
}

export default ExampleProfile;
