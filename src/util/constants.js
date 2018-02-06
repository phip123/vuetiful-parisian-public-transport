import Network from "../models/Network";

export const METRO = new Network("metro", "Metro");
export const BUS = new Network("bus", "Bus");
export const RER = new Network("rer", "Rer");
export const TRAM = new Network("tram", "Tram");

export const NETWORK_TYPES = [METRO, BUS, RER, TRAM];

export const LINE_API = "http://restratpws.azurewebsites.net/api/Lines";

export const IMAGE_URL = "http://restratpws.azurewebsites.net/api/images";
