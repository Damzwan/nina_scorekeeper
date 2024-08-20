export interface FootBallEvent {
    time: number;
    player ?: string;
    team: string;
    action: string;
    player_out?: string;
    player_in?: string;
}

export const football_actions = [
    'goal',
    'doelpoging',
    'voorzet',
    'vrije trap',
    'corner',
    'Doel uittrap',
    'wissel'
];