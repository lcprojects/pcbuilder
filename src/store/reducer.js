import iconCPU from '../assets/images/cpu.png';
import iconGPU from '../assets/images/gpu.png';
import iconRAM from '../assets/images/ram.png';
import iconMotherboard from '../assets/images/motherboard.png';
import iconStorage from '../assets/images/storage.png';
import iconMouse from '../assets/images/mouse.png';
import iconMonitor from '../assets/images/monitor.png';
import iconKeyboard from '../assets/images/keyboard.png';
import iconPowerSupply from '../assets/images/power-supply.png';

import iconAMDLogo from '../assets/images/amd-logo.png';
import iconIntelLogo from '../assets/images/intel-logo.jpg';
import iconNvidiaLogo from '../assets/images/nvidia-logo.png';
import iconAMDRadeonLogo from '../assets/images/amd-radeon-logo.webp';
import iconViperLogo from '../assets/images/viper-logo.png';
import iconCorsairLogo from '../assets/images/corsair-logo.svg';
import iconHyperxLogo from '../assets/images/hyperx-logo.jpg';

const initialState = {
    partsList: [
        {
            name: 'CPU',
            icon: iconCPU,
            list: [
                { description: 'AMD Ryzen 9 3950X', price: 749, logo: iconAMDLogo },
                { description: 'Intel Core i9-7980XE', price: 1998.99, logo: iconIntelLogo },
                { description: 'Intel Core i9-9980XE', price: 1999.99, logo: iconIntelLogo },
                { description: 'AMD Ryzen 9 3900X', price: 469.99, logo: iconAMDLogo },
                { description: 'AMD Ryzen Threadripper 3970X', price: 1948.99, logo: iconAMDLogo }
            ],
            disabled: false
        },
        {
            name: 'GPU',
            icon: iconGPU,
            list: [
                { description: 'Nvidia Titan RTX', price: 2299.00, logo: iconNvidiaLogo },
                { description: 'Nvidia GeForce RTX 2080 Ti', price: 1279.00, logo: iconNvidiaLogo },
                { description: 'Nvidia Titan Xp', price: 1779.00, logo: iconNvidiaLogo },
                { description: 'Nvidia GeForce GTX 1080 Ti', price: 642.00, logo: iconNvidiaLogo },
                { description: 'AMD Radeon RX 5600 XT', price: 457.92, logo: iconAMDRadeonLogo }
            ],
            disabled: false
        },
        {
            name: 'RAM',
            icon: iconRAM,
            list: [
                { description: 'Patriot Viper Steel DDR4-4400 (2x8GB)', price: 169.99, logo: iconViperLogo },
                { description: 'Patriot Viper RGB DDR4-3600 16GB', price: 104.99, logo: iconViperLogo },
                { description: 'Patriot Viper 4 DDR4-3400 16GB', price: 74.99, logo: iconViperLogo },
                { description: 'Corsair Vengeance RGB Pro DDR4-3200 (4x8GB)', price: 189.99, logo: iconCorsairLogo },
                { description: 'Patriot Viper Steel DDR4-3200 (2x 16GB)', price: 139.99, logo: iconViperLogo },
                { description: 'HyperX Predator RGB DDR4-2933 (4x8GB)', price: 222.98, logo: iconHyperxLogo }
            ],
            disabled: false
        },
        {
            name: 'Motherboard',
            icon: iconMotherboard,
            disabled: true
        },
        {
            name: 'Power Supply',
            icon: iconPowerSupply,
            disabled: true
        },
        {
            name: 'Storage',
            icon: iconStorage,
            disabled: true
        },
        {
            name: 'Monitor',
            icon: iconMonitor,
            disabled: true
        },
        {
            name: 'Mouse',
            icon: iconMouse,
            disabled: true
        },
        {
            name: 'Keyboard',
            icon: iconKeyboard,
            disabled: true
        }
    ],
    selectedParts: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADDPART') {
        return {
            ...state,
            totalPrice: state.totalPrice + action.payload.price,
            selectedParts: state.selectedParts.concat(action.payload)
        }
    }
    if (action.type === 'DELETEPART') {
        return {
            ...state,
            selectedParts: state.selectedParts.filter((part, index) => index !== action.index),
            totalPrice: Math.abs(state.totalPrice - action.price)
        }
    }
    return state;
}

export default reducer;