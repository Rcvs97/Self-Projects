const audio = {
    Map: new Howl({
        src: './audio/map.wav',
        htlm5: true,
        volume: 0.4
    }),
    initBattle: new Howl({
        src: './audio/initBattle.wav',
        htlm5: true,
        volume: 0.1
    }),
    battle: new Howl({
        src: './audio/battle.mp3',
        htlm5: true,
        volume: 0.2
    }),
    fireballHit: new Howl({
        src: './audio/fireballHit.wav',
        htlm5: true,
        volume: 0.1
    }),
    initFireball: new Howl({
        src: './audio/initFireball.wav',
        htlm5: true,
        volume: 0.1
    }),
    tackleHit: new Howl({
        src: './audio/tackleHit.wav',
        htlm5: true,
        volume: 0.1
    }),
    victory: new Howl({
        src: './audio/victory.wav',
        htlm5: true,
        volume: 0.1
    }),
}