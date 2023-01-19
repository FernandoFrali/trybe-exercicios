import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const pokemock = {
  cards: [
    {
      id: 'xyp-XY174',
      name: 'Pikachu-EX',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/xyp/XY174.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xyp/XY174_hires.png',
      types: ['Lightning'],
      supertype: 'Pokémon',
      subtype: 'EX',
      hp: '130',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: 'XY174',
      artist: '5ban Graphics',
      rarity: 'Common',
      series: 'XY',
      set: 'XY Black Star Promos',
      setCode: 'xyp',
      text: [
        'When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.',
      ],
      attacks: [
        {
          cost: ['Lightning', 'Colorless'],
          name: 'Thunder Shock',
          text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
          damage: '30',
          convertedEnergyCost: 2,
        },
        {
          cost: ['Lightning', 'Lightning', 'Colorless'],
          name: 'Mega Thunderbolt',
          text: 'Discard all Energy attached to this Pokémon.',
          damage: '160',
          convertedEnergyCost: 3,
        },
      ],
      resistances: [
        {
          type: 'Metal',
          value: '-20',
        },
      ],
      weaknesses: [
        {
          type: 'Fighting',
          value: 'x2',
        },
      ],
    },
  ],
};

describe('Funcionalidades', () => {
  it('renders "Pesquisar" button', () => {
    render(<App />);
    const linkElement = screen.getByText(/Pesquisar/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('ao digitar "pikachu" e clicar no botão de pesquisa, ele tem o retorno correto', async () => {
    const fetchMock = {
      json: async () => pokemock,
    };

    jest.spyOn(global, 'fetch').mockImplementation(async () => fetchMock);
    render(<App />);
    const inputz = screen.getByRole('textbox');
    const search = screen.getByText(/Pesquisar/i);
    userEvent.type(inputz, 'pikachu');
    userEvent.click(search);
    const pikachu = await screen.findByText(/Pikachu/i);
    expect(pikachu).toBeDefined();
  });
});
