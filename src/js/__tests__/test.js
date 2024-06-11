import { healthIndicator } from '../app';
import { sorting } from '../app';

test.each([
    [
        {
            name: 'Маг', health: 90
        }, 'healthy'
    ],
    [
        {
            name: 'Друид', health: 31
        }, 'wounded'
    ],
    [
        {
            name: 'Эльф', health: 10
        }, 'critical'
    ],
])('testing health indicator function with player %s', (player, expected) => {
    const result = healthIndicator(player);
    expect(result).toBe(expected);
});

const players = [
    {
        name: 'мечник', health: 10
    },
    {
        name: 'маг', health: 100
    },
    {
        name: 'лучник', health: 80
    },
];

const expected = [
    {
        name: 'маг', health: 100
    },
    {
        name: 'лучник', health: 80
    },
    {
        name: 'мечник', health: 10
    },
];

test('sorting by health scale', () => {
    const result = sorting(players);
    expect(result).toEqual(expected);
});