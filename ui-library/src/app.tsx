import {Component, createEffect, createSignal, For} from 'solid-js';
import {Rounded, Select} from "./components/select/SelectInput";

interface Product {
    id: number,
    name: string,
    price: number
}

const App: Component = () => {
    const [selectedOption, setSelectedOption] = createSignal<Product[]>();

    createEffect(() => {
        console.log(selectedOption());
    });

    const products = [
        {id: 1, name: "Laptop", price: 899.99},
        {id: 2, name: "Smartphone", price: 599.99},
        {id: 3, name: "Headphones", price: 129.99},
        {id: 4, name: "Camera", price: 499.99},
        {id: 5, name: "Tablet", price: 349.99},
        {id: 6, name: "Watch", price: 199.99},
        {id: 7, name: "Speaker", price: 79.99},
        {id: 8, name: "Gaming Console", price: 299.99},
        {id: 9, name: "Printer", price: 159.99},
        {id: 10, name: "External Hard Drive", price: 129.99},
    ];

    return (
        <div class={"p-4"}>
            <Select.Container>
                <Select.Input get={selectedOption} set={setSelectedOption} placeholder={"Select an option"}
                              rounded={Rounded.MEDIUM} readonly={true}/>
                <Select.OptionContainer listSize={5}>
                    <For each={products}>{(p) =>
                        <Select.Option label={p.name} value={p} get={selectedOption} set={setSelectedOption}/>
                    }</For>
                </Select.OptionContainer>
            </Select.Container>
        </div>
    );
};

export default App;
