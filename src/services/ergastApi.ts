import axios from 'axios';
import {Race} from "@f1types/f1";

const client = axios.create({
    baseURL: 'https://api.jolpi.ca/ergast/f1',
});

export async function getNextRace() {
    const res = await client.get('/current/next.json');
    return res.data.MRData.RaceTable.Races[0];
}

export async function getLastRace() {
    const res = await client.get('/current/last.json');
    return res.data.MRData.RaceTable.Races[0];
}

export async function getCurrentSchedule() {
    const res = await client.get('/current.json');
    return res.data.MRData.RaceTable.Races;
}

export async function getDriverStandings() {
    const res = await client.get('/current/driverStandings.json');
    return res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}

export async function getConstructorStandings() {
    const res = await client.get('/current/constructorStandings.json');
    return res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
}

export async function getRaceResults(round: string) {
    const res = await client.get(`/current/${round}/results.json`);
    return res.data.MRData.RaceTable.Races[0]?.Results ?? [];
}

export async function getLastRaceResults() {
    const res = await client.get('/current/last/results.json');
    return res.data.MRData.RaceTable.Races[0];
}

export async function getDriverResults(driverId: string) {
    const res = await client.get(`/current/drivers/${driverId}/results.json`);
    return res.data.MRData.RaceTable.Races;
}

export async function getConstructorResults(constructorId: string) {
    const res = await client.get(`/current/constructors/${constructorId}/results.json`);
    return res.data.MRData.RaceTable.Races;
}

export async function getOnThisDay() {
    const today = new Date();
    const month = today.getMonth() + 1;

    const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

    for (const year of years) {
        const res = await client.get(`/${year}.json`);
        const races = res.data.MRData.RaceTable.Races;

        const match = races.filter((race: Race) => {
            const raceDate = new Date(race.date);
            return raceDate.getMonth() + 1 === month;
        });

        if (match.length > 0) return match;
    }

    return [];
}