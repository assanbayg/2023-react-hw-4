'use client';
import axios from 'axios';
import { CharacterServices } from './character_services';
import SearchBar from "./search_bar";


export default function Home() {

    return <main>
        <header className="w-full flex justify-center bg-rose-400 p-3">
            <p className="text-2xl text-white font-poppins">Welcome to Disney</p>
        </header>
        <div className="mt-16 flex flex-col items-center">
            <SearchBar></SearchBar>
        </div>
    </main>;
}
