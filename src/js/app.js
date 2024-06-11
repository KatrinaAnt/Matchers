export function healthIndicator(player) {
    if(player.health < 15) {
        return 'critical';
    } else if (player.health >= 15 && player.health <= 50) {
        return 'wounded';
    } else {
        return 'healthy';
    }
}

export function sorting(players) {
    return players.sort((a, b) => {
        return b.health - a.health;
    });
}