'use client'
import { Box, Button, Switch } from "@mantine/core"
import { useRouter } from "next/navigation"
import styles  from "./styles.module.css"

function Botao (){
    
    const router = useRouter()

    return(
        <Box style={{
            display:"flex",
            gap:"10px",
        }}>
            <Button classNames={styles} onClick={() => router.push("/pages/monstros")}>
              Cartas de monstros
            </Button>
            <Button classNames={styles} onClick={() => router.push("/pages/magias")}>
              Cartas de magia
            </Button>
            <Button classNames={styles} onClick={() => router.push("/pages/armadilhas")}>
              Cartas de armadilha
            </Button>
            
        </Box>
    )


}
export default Botao