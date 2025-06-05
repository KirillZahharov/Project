const services = [
    {
        title: "Ladustamine",
        description: "Paku turvalist hoiustamist meie kaasaegsetes ja kütteseadmega varustatud ladudes üle Eesti."
      },
      {
        title: "Transport",
        description: "Korraldame transpordi kauba toomiseks ja viimiseks – vajadusel ka ukse ette."
      },
      {
        title: "Broneerimissüsteem",
        description: "Digitaalne süsteem laoruumide otsimiseks, broneerimiseks, arveldamiseks ja pikendamiseks."
      },
      {
        title: "Ärikliendi lahendused",
        description: "Pakume paindlikke lahendusi ka ettevõtetele – regulaarne transport, mitmekordne ladustus ja kohandatud hinnad."
      }
];

const Services = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center">Meie teenused</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
