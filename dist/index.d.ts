declare type EventListener = () => void;
declare type BatteryManager = {
    charging: boolean;
    chargingTime: number;
    discargingTime: number;
    level: number;
    onchargingchange: EventListener;
    onchargingtimechange: EventListener;
    ondischargingtimechange: EventListener;
    onlevelchange: EventListener;
};
declare global {
    interface Navigator {
        getBattery(): Promise<BatteryManager>;
    }
    interface Window {
        createBatteryWidget(): Promise<HTMLElement>;
    }
}
export {};
