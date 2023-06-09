'use client';
import axios from 'axios';
import { CharacterServices } from './character_services';
import SearchBar from '@/components/search_bar';
import Characters from '@/components/characters';


export default function Home() {

    return <main>
        <header className="w-full flex justify-center bg-rose-400 p-3">
            <p className="text-2xl text-white">Welcome to Disney</p>
        </header>
        <div className="mt-16 flex flex-col items-center">
            <SearchBar></SearchBar>
            <Characters></Characters>
        </div>
    </main>;
}
