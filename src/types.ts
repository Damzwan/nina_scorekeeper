export interface FootBallEvent {
    time: number;
    team: string;
    action: string;
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