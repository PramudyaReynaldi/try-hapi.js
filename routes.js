// Method/Verb Request dan Routing
const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },

  // Merhod '*' ini mendandakan bahwa ada method selain yang didefisikan
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Tidak ada method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Tidak ada method tersebut";
    },
  },

  // Path parameters
  {
    method: "GET",
    path: "/users/{username}",
    handler: (request, h) => {
      const { username } = request.params;
      return `Hello, ${username}`;
    },
  },

  // Path parameter using ?
  {
    method: "GET",
    path: "/user/{nama?}",
    handler: (request, h) => {
      const { nama = "stranger" } = request.params;
      return `Hello, ${nama}`;
    },
  },

  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      // Sekaligus mencontohkan Query Parameter
      const { lang } = request.query;

      if(lang === "id") return `Hai ${name}`
    },
  },

  // Query parameters
  {
    method: "GET",
    path: "/query", // Saya memakai path query karena sudah kehabisan path wkwk
    handler: (request, h) => {
      const { pengguna, lokasi } = request.query; // Contoh Query parameter
      return `Halo ${pengguna}, kita berada di ${lokasi}`;
    },
  },

  {
    method: "GET",
    path: "/query2",
    handler: (request, h) => {
      
    }
  }
];

module.exports = routes;
