const quotes = [
  {
    quote: "나를 웃게 하는 것이 나 자신을 사랑하는 것이다.",
    author: "-미키마우스-",
  },
  {
    quote: "너는 아직 꿈을 이룰 충분한 시간이 있어.",
    author: "-피터팬-",
  },
  {
    quote: "세상을 햇살로 가득 채울 수 있는 사람은 오직 너라는 걸 기억해. ",
    author: "-백설공주-",
  },
  {
    quote:
      "남들이 어떻게 생각하는지는 중요하지 않아、나 자신이 어떻게 생각하는지가 중요해.",
    author: "-인어공주-",
  },
  {
    quote: "우리가 꿈을 추구할 용기가 있다면 우리의 모든 꿈은 실현 될 수 있다.",
    author: "-월트디즈니-",
  },
  {
    quote: "거짓말이 거짓말을 만든다.",
    author: "-피노키오-",
  },
  {
    quote: "최고의 순간은 갑자기 찾아오는 거야.",
    author: "-니모를 찾아서-",
  },
  {
    quote: "난 지금 잠깐 넘어졌지만 다시 일어날 거야.",
    author: "-밤비-",
  },
  {
    quote: "내 기분은 내가 정해, 오늘은 행복이야.",
    author: "-이상한 나라의 앨리스-",
  },
  {
    quote:
      "오늘이 너의 인생에서 최악이 날이어도 내일은 더 나아질 거라는 걸 알잖아.",
    author: "-주토피아-",
  },
  {
    quote: "난 더 이상 숨지 않고, 오늘을 즐기며 최선을 다할 거야.",
    author: "-코코-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

quote.classList.add("saying");
author.classList.add("character");
