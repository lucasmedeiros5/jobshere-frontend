import { store } from 'react-easy-state';
export const GlobalStore = store(
    {
        token: localStorage.getItem('auth') ? localStorage.getItem('auth') : undefined,
        userId: undefined,
        user: undefined,
        proposal: [
            {
                name: "Proposta de emprego 1",
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, in voluptatem, fugiat illo voluptas enim veniam officiis rerum molestias labore praesentium, autem cumque provident aut nemo reiciendis mollitia sunt magnam?',
                company: "Pic Pay",
                requirements: "nodejs, java, python",
                salary: "R$: 5220.00"
            },
            {
                name: "Proposta de emprego 1",
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, in voluptatem, fugiat illo voluptas enim veniam officiis rerum molestias labore praesentium, autem cumque provident aut nemo reiciendis mollitia sunt magnam?',
                company: "Pic Pay",
                requirements: "nodejs, java, python",
                salary: "R$: 5220.00"
            },
            {
                name: "Proposta de emprego 1",
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, in voluptatem, fugiat illo voluptas enim veniam officiis rerum molestias labore praesentium, autem cumque provident aut nemo reiciendis mollitia sunt magnam?',
                company: "Pic Pay",
                requirements: "nodejs, java, python",
                salary: "R$: 5220.00"
            },
        ]
    }
);
