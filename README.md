#ANGULAR # EsnPainter

Custom right click menu ,providing route levels

---------------------INSTALLATION

     npm i esn-context-menu --force

     import { EsnPhotoPainterModule } from 'esn-context-menu';
        

---------------------Demo

        https://stackblitz.com/edit/esn-context-menu

  	    https://esn-context-menu.stackblitz.io


---------------------Usage
--------------------TS

   data = {
        bgColor: 'yellow',
        color: 'green',
        hoverColor: 'red',
        menuItems: [
            ["aItem","saveLink"],["bItem","bLink"],["cItem","cLink"]]
    }

--------------------HTML

    <esn-context-menu>  </esn-context-menu>




