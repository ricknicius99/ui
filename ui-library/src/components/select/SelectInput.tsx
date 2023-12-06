import {createEffect, createSignal, For, JSXElement} from "solid-js";

const [selected, setSelected] = createSignal<any>();
const [active, setActive] = createSignal<boolean>(false);

export enum Rounded {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg",
    FULL = "full"
}

function Container(props: {
    children: JSXElement;
    class?: string;
}): JSXElement {
    return (
        <div class={`${props.class}`}>
            {props.children}
        </div>
    );
}

function Input(props: {
    get: () => any;
    set: (value: any) => void;
    rounded?: Rounded;
    readonly?: boolean;
    placeholder: string;
}) {
    setSelected(props.placeholder)

    createEffect(() => {
        active()
        const handleClickOutside = (event: MouseEvent) => {
            if ((event.target as HTMLElement).id != "inputField") {
                setActive(false)
                window.removeEventListener("click", handleClickOutside)
            }
        }
        window.addEventListener("click", handleClickOutside)
    })

    return (
        <input
            id="inputField"
            class={`py-2 px-4 text-sm block w-full bg-white rounded-${props.rounded} border-gray-200 focus:border-gray-200 focus:border cursor-pointer placeholder:text-gray-800`}
            tabIndex={0} placeholder={selected()} readOnly={true}
            onClick={() => {
                setActive(!active())
            }}
        />
    )
}

function OptionContainer(props: { listSize: number, children: JSXElement }) {
    const size = () => {
        const sm = props.listSize * 32
        const lg = props.listSize * 40
        return {sm, lg}
    }

    return (
        <ul
            class={`overflow-y-auto border rounded-md mt-2 no-scrollbar selectContainer h-[${size().lg}px list-none`}
            classList={{"hidden": !active()}}
        >
            {props.children}
        </ul>
    )
}

function Option(props: { label: string, value: any, get: () => any, set: (value: any) => void }) {
    return (
        <a class={"outline-none group"} href="#"
           onClick={() => {
               props.set(props.value)
               setSelected(props.label)
               setActive(false)
           }}>
            <li class={`select-option text-sm py-2 px-4 cursor-pointer outline-none group-hover:bg-gray-100 group-focus:bg-gray-100`}>
                {props.label}
                <input class={"hidden"} type={"radio"} value={props.value}/>
            </li>
        </a>
    )
}

export const Select = {
    Container: Container,
    Input: Input,
    OptionContainer: OptionContainer,
    Option: Option,
}