import { useUser } from "../../lib/my-api";
import profileImage from '../../assets/Instagram-Profile.jpeg';
import profileImage2 from '../../assets/profileimg.png';

function ExampleProfile() {
  const userId = 2;
  const { status, error, data } = useUser(userId);
  const isLoading = status === "loading";

  // Mock data for contacts (replace this with actual data)
  const mockContacts = [
    { id: 1, name: "Peter", post: "Just had a delicious meal! 🍔" },
    { id: 2, name: "Julie", post: "Exploring the great outdoors! 🏞️" },
    { id: 1, name: "Johan", post: "Working on a new project! 💻" },
    { id: 2, name: "Noah", post: "Hiking up the mountains! ⛰️" },
    { id: 1, name: "Josef", post: "Enjoying a relaxing day at the beach. 🏖️" },
    { id: 2, name: "Lucas", post: "Just watched an amazing movie! 🎬" },
  ];

  // Mock user details (replace this with actual data)
  const userDetails = "I am 23 years old and enjoy sports. I study in Noroff and my studies are in frontend development. I like to travel and meet new friends in my spare time. Currently, I'm looking for a new job, so if you find any opportunities, let me know!";

  // Mock user post (replace this with actual data)
  const mockPost = {
    id: 1,
    content: "Just played a great game of basketball! 🏀",
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  console.log("user data >>>>", data);

  return (
    <div className="p-4 space-y-8 mx-2 md:mx-40 lg:mx-50">
    <div className="p-4 space-y-8">
      {/* Profile Image and Mock Details */}
      <div className="flex items-center justify-center border p-4 rounded-lg shadow-md bg-black">
        {/* Profile Image */}
        <img src={profileImage} alt="Profile Image" className="w-20s h-20 rounded-full" />

        {/* Mock Details */}
        <div className="w-1/2 text-white pl-8">
          <h1 className="text-2xl font-semibold">Johansen</h1>
          <p className="text-gray-300">{userDetails}</p>
        </div>
      </div>

      {/* Contacts List */}
      <div className="space-y-2 text-center">
        <h2 className="text-xl font-semibold text-blue-500">Contacts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto border p-4 rounded-lg shadow-md bg-black-100">
          {mockContacts.map(contact => (
            <li key={contact.id} className="flex items-center justify-center space-x-2">
              <img src={profileImage2} alt="Contact" className="w-12 h-12 rounded-full" />
              <span>{contact.name}</span>
            </li>
          ))}
        </div>
      </div>

      {/* Posts from Contacts */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-500">Posts from Contacts</h2>
        {mockContacts.map(contact => (
          <div key={contact.id} className="border p-4 rounded-lg shadow-md bg-black">
            <p className="text-white">
              <span className="font-semibold text-blue-500">{contact.name}: </span>
              {contact.post}
            </p>
          </div>
        ))}
      </div>

      {/* User Post */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-500">Your Posts</h2>
        <div className="border p-4 rounded-lg shadow-md bg-black">
          <p className="text-white">{mockPost.content}</p>
        </div>
      </div>

      {/* Post Form */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-blue-500">Post Something</h2>
        <form className="space-y-2">
          <textarea className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300" rows="3" placeholder="Write your post"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Post</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ExampleProfile;
