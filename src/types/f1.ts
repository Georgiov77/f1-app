export interface RaceSession {
    date: string;
    time?: string;
}

export interface Race {
    season: string;
    round: string;
    raceName: string;
    date: string;
    time?: string;
    Circuit: {
        circuitId: string;
        circuitName: string;
        Location: {
            locality: string;
            country: string;
        };
    };
    FirstPractice?: RaceSession;
    SecondPractice?: RaceSession;
    ThirdPractice?: RaceSession;
    Qualifying?: RaceSession;
    Sprint?: RaceSession;
}

export interface DriverStanding {
    position: string;
    points: string;
    wins: string;
    Driver: {
        driverId: string;
        code: string;
        givenName: string;
        familyName: string;
        nationality: string;
    };
    Constructors: {
        constructorId: string;
        name: string;
    }[];
}

export interface ConstructorStanding {
    position: string;
    points: string;
    wins: string;
    Constructor: {
        constructorId: string;
        name: string;
        nationality: string;
    };
}

export interface LivePosition {
    driver_number: number;
    position: number;
    date: string;
}

export interface SessionDriver {
    driver_number: number;
    full_name: string;
    name_acronym: string;
    team_name: string;
    team_colour: string;
}

export interface Session {
    session_key: number;
    session_name: string;
    session_type: string;
    status: string;
    circuit_short_name: string;
    country_name: string;
    date_start: string;
}

export interface RaceResult {
    position: string;
    Driver: {
        driverId: string;
        code: string;
        givenName: string;
        familyName: string;
    };
    Constructor: {
        constructorId: string;
        name: string;
    };
    points: string;
    status: string;
    Time?: {
        time: string;
    };
}

export interface DriverRace {
    raceName: string;
    round: string;
    date: string;
    Results: RaceResult[];
}

export interface LapTime {
    driver_number: number;
    lap_number: number;
    lap_duration: number | null;
    is_pit_out_lap: boolean;
}