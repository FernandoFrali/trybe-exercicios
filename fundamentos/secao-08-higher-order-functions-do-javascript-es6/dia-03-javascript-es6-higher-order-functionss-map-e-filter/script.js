const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const livrosOrganizer = () => {
  return books.map(
    (book) => `${book.name} - ${book.genre} - ${book.author.name}`
  );
};

// console.log(livrosOrganizer());

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

const booksAuthors = () => {
  const authorsAge = books.map((book) => ({
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear,
  }));

  return authorsAge.sort((a, b) => a.age - b.age);
};
// console.log(booksAuthors());

// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const filteredBooks = books.filter(
  (book) => book.genre === "Fantasia" || book.genre === "Ficção Científica"
);

// console.log(filteredBooks);

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const olderBooks = books.filter((book) => 2022 - book.releaseYear > 60);
olderBooks.sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(olderBooks);

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const authorsFantasyOrScience = () => {
  const fantasyAndScience = books.filter(
    (book) => book.genre === "Fantasia" || book.genre === "Ficção Científica"
  );
  const authors = fantasyAndScience.map((a) => a.author.name).sort();
  return authors;
};

// console.log(authorsFantasyOrScience());

const oldBooks = () => {
  const olderThanSixty = books
    .filter((book) => 2022 - book.releaseYear > 60)
    .map((nam) => nam.name);
  return olderThanSixty;
};
// console.log(oldBooks());

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const findName = () => {
  return books.find(
    (book) =>
      book.author.name.split(" ").filter((word) => word.endsWith("."))
        .length === 3
  ).name;
};

// console.log(findName());
