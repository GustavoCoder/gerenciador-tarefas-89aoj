/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { loadGetInitialProps } from "next/dist/shared/lib/utils"
type HeaderProps = {
    setAccessToken(s : string) : void
}

export const Header : NextPage<HeaderProps> = ({setAccessToken}) => {
    const mobile = window.innerWidth < 954;

    const userName = localStorage.getItem('name');
    const firstName = userName?.split(' ')[0] || 'Anônimo';

    const sair = () => {
        localStorage.clear();
        setAccessToken('');
    }

    return (
        <div className="container-header">
            <img src="logo.svg" alt="Logo FIAP" className="logo"/>
            <button>
                <strong>+</strong> Adicionar Tarefa
            </button>
            <div>
                <span>Olá {firstName} </span>
                <img src={mobile ? 'exit-mobile.svg' : 'exit-desktop.svg'} alt="Sair"
                    onClick={sair}/>
            </div>
        </div>
    )
}