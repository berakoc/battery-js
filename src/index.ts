type EventListener = () => void;
type BatteryManager = {
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

(() => {
    const convertBatteryLevelToPercentage = (batteryLevel: number) => Math.floor(batteryLevel * 100);
    window.createBatteryWidget = async () => {
        const newBatteryWidget = document.createElement('battery-widget');
        const batteryManager = await navigator.getBattery();
        newBatteryWidget.innerText = String(convertBatteryLevelToPercentage(batteryManager.level));
        batteryManager.onlevelchange = () => {
            newBatteryWidget.innerText = String(convertBatteryLevelToPercentage(batteryManager.level))
        }
        return newBatteryWidget;
    }
})();

export {};