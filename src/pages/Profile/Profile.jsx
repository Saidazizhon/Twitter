import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <div className="relative">
        <div className="bg-blue-900 h-40"></div>
        <div className="absolute bottom-0 left-4 transform translate-y-1/2">
          <img
            className="w-24 h-24 rounded-full border-4 border-white"
            src="https://picsum.photos/500/500"
            alt="Profile"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-12 px-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Bobur</h1>
            <p className="text-gray-600">@bobur_mavlonov</p>
            <p className="text-gray-600">UX/UI designer at @abutechuz</p>
            <p className="text-gray-600">Born November 24, 2000 • Joined May 2020</p>
          </div>
          <button className="bg-gray-300 text-black px-4 py-2 rounded-lg">Edit profile</button>
        </div>

        {/* Following and Followers */}
        <div className="mt-4 flex space-x-4">
          <p className="text-gray-700">
            <span className="font-bold">67</span> Following
          </p>
          <p className="text-gray-700">
            <span className="font-bold">47</span> Followers
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-300 mt-6">
        <ul className="flex space-x-4 px-6">
          <li className="text-blue-500 font-bold border-b-2 border-blue-500 pb-2">Tweets</li>
          <li className="text-gray-500">Tweets & replies</li>
          <li className="text-gray-500">Media</li>
          <li className="text-gray-500">Likes</li>
        </ul>
      </div>

      {/* Tweets */}
      <div className="mt-4 px-6 space-y-4">
        {/* Tweet 1 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-600">Pinned Tweet</p>
          <p className="mt-2">
            4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan
            to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatimni normallashtirishni reja qildim
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2 text-gray-500">
              <span>10</span>
              <span>1</span>
              <span>8</span>
            </div>
          </div>
        </div>

        {/* Tweet 2 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <p>
            Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz.
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2 text-gray-500">
              <span>5</span>
              <span>5</span>
              <span>9</span>
            </div>
          </div>
        </div>

        {/* Tweet 3 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <p>A bo‘pti maskamasman</p>
          <div className="mt-4">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Tweet Image"
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2 text-gray-500">
              <span>10</span>
              <span>8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
