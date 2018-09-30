$(function () {
  const data = [
    {
      titulo: "Hola",
      url: ""
    },
    {
      titulo: "prueba",
      url: ""
    }
  ];

  data.forEach(element => {
    $(".row").append(`
        <div class="col m4 s6">
          <div class="card">
            <div class="content">
              <span>${element.titulo}</span>
            </div>

            <div class="link_action">
              <a href="${element.url}">
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
    `)
  })
})