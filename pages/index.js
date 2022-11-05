import {listScripts} from "../utils/scripts.js";
import Link from "next/link";

export default function Home(scripts) {

    return (
        <div>
            {scripts.map((script) => (
                <p key={script.name}>
                    {script.name} - {script.creator} - {script.source}
                </p>
            ))}
        </div>
    )

}

export async function getStaticProps(){


        const scripts = listScripts().then((result) => {
            console.log(result);
        });

    return {
        props: {
            scripts
        },
    };
}
