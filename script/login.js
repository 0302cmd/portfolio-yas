document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Recupera os valores dos campos
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;
  var country = document.getElementById("country").value;

    // Validar os valores dos campos (exemplo: verificar se o nome não está vazio)
    if (name === "") {
      alert("Por favor, insira um nome.");
      return; // Sai da função para evitar a execução do código restante
    }
  
    // Exibir os dados do formulário
    var formData = {
      Name: name,
      Email: email,
      Password: password,
      DateOfBirth: dob,
      Gender: gender,
      Country: country
    };
  
    // Exemplo de exibição dos dados na página
    var output = document.getElementById("output");
    output.innerHTML = "<pre>" + JSON.stringify(formData, null, 2) + "</pre>";
  });
