import React from 'react';

const Tutorial = () => {
  return (
    <section id="articles-tutorials" className="py-16 px-6 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Articles and Tutorials</h2>

      <div className="flex flex-wrap justify-center gap-10">

        <div className="w-full md:w-[360px] bg-white rounded shadow-lg overflow-hidden">
          <a
            href="https://medium.com/@deshapriyad.sasanka/how-cryptocurrency-works-be0a544471bc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*nPynOG_ggIIqxwHvBLBInQ.png"
              alt="How Cryptocurrency Works"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold hover:underline text-blue-600">
                How Cryptocurrency Works — by Deshapriyad Sasanka
              </h3>
            </div>
          </a>
        </div>

        <div className="w-full md:w-[360px] bg-white rounded shadow-lg overflow-hidden">
          <a
            href="https://medium.com/@deshapriyad.sasanka/understanding-bitcoin-mining-how-it-works-rewards-and-importance-for-cryptocurrency-security-584faf21fae7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://media.licdn.com/dms/image/sync/v2/D4E27AQHhTsaFaG7_ug/articleshare-shrink_800/articleshare-shrink_800/0/1721743061019?e=1749139200&v=beta&t=OdN_PpGBitiEUWwMvIhPwgf9esRIghBiLDCJxCCy-EM"
              alt="Bitcoin Mining"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold hover:underline text-blue-600">
                Understanding Bitcoin Mining: How it Works, Rewards, and Importance for Cryptocurrency Security
              </h3>
            </div>
          </a>
        </div>

        <div className="w-full md:w-[360px]">
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/-_bYih-2oDY"
            title="How Cryptocurrency Works"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded shadow-lg"
          ></iframe>
        </div>

        <div className="w-full md:w-[360px]">
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/ALInBM-ppn0"
            title="Bitcoin Mining Explained"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
