/* NOME DO BANCO DE DADOS */
const database = "bd3_atv2";

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3_atv2_produtos";

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/*INSERE UM REGISTRO NA COLEÇÃO DE DADOS: */
db[collection].insertMany(
    [
        {
            "nome": "Smart TV 65\"",
            "valor": 4000.00,
            "quantidade_em_estoque": 15,
            "fabricante": "VisionTech",
            "categoria": "Eletrônicos",
            "descricao": "TV OLED com resolução 8K, smart e conexão Bluetooth."
        },
        {
            "nome": "Smartphone Y20",
            "valor": 3000.00,
            "quantidade_em_estoque": 10,
            "fabricante": "GigaMobile",
            "categoria": "Celulares",
            "descricao": "Smartphone com câmera de 64 MP e 256 GB de armazenamento."
        },
        {
            "nome": "Laptop Ultra 14\"",
            "valor": 5000.00,
            "quantidade_em_estoque": 8,
            "fabricante": "EliteTech",
            "categoria": "Informática",
            "descricao": "Laptop leve para produtividade, com 32 GB de RAM."
        },
        {
            "nome": "Fones de Ouvido Sem Fio",
            "valor": 500.00,
            "quantidade_em_estoque": 40,
            "fabricante": "AudioWave",
            "categoria": "Acessórios",
            "descricao": "Fones com cancelamento ativo de ruído e som imersivo."
        },
        {
            "nome": "Geladeira Duplex",
            "valor": 3200.00,
            "quantidade_em_estoque": 6,
            "fabricante": "CoolMaster",
            "categoria": "Eletrodomésticos",
            "descricao": "Geladeira com 600 litros e tecnologia inverter."
        },
        {
            "nome": "Aspirador Vertical",
            "valor": 1400.00,
            "quantidade_em_estoque": 10,
            "fabricante": "SmartClean",
            "categoria": "Eletrodomésticos",
            "descricao": "Aspirador vertical sem fio com 3 modos de limpeza."
        },
        {
            "nome": "Câmera Mirrorless",
            "valor": 4500.00,
            "quantidade_em_estoque": 4,
            "fabricante": "PhotoPro",
            "categoria": "Fotografia",
            "descricao": "Câmera compacta com lentes intercambiáveis e alta sensibilidade."
        },
        {
            "nome": "Impressora Laser",
            "valor": 850.00,
            "quantidade_em_estoque": 20,
            "fabricante": "PrintMaster",
            "categoria": "Informática",
            "descricao": "Impressora a laser com função de cópia e digitalização."
        },
        {
            "nome": "Microondas com Grill",
            "valor": 700.00,
            "quantidade_em_estoque": 25,
            "fabricante": "QuickCook",
            "categoria": "Eletrodomésticos",
            "descricao": "Microondas com grill e painel touch."
        },
        {
            "nome": "Console de Jogos",
            "valor": 2500.00,
            "quantidade_em_estoque": 12,
            "fabricante": "PlayMax",
            "categoria": "Jogos",
            "descricao": "Console com jogos exclusivos e 2 TB de armazenamento."
        },
        {
            "nome": "Mochila Executiva",
            "valor": 200.00,
            "quantidade_em_estoque": 35,
            "fabricante": "UrbanBag",
            "categoria": "Acessórios",
            "descricao": "Mochila com compartimento para laptop e design elegante."
        },
        {
            "nome": "Teclado Gaming",
            "valor": 350.00,
            "quantidade_em_estoque": 20,
            "fabricante": "GameTech",
            "categoria": "Informática",
            "descricao": "Teclado mecânico RGB com switches personalizáveis."
        },
        {
            "nome": "Mouse Ergonômico",
            "valor": 250.00,
            "quantidade_em_estoque": 25,
            "fabricante": "ErgoGear",
            "categoria": "Acessórios",
            "descricao": "Mouse ergonômico com 8 botões programáveis."
        },
        {
            "nome": "Monitor 32\"",
            "valor": 1500.00,
            "quantidade_em_estoque": 10,
            "fabricante": "DisplayPlus",
            "categoria": "Informática",
            "descricao": "Monitor 4K com suporte a HDR."
        },
        {
            "nome": "Cadeira de Escritório",
            "valor": 700.00,
            "quantidade_em_estoque": 12,
            "fabricante": "WorkComfort",
            "categoria": "Móveis",
            "descricao": "Cadeira ajustável com suporte lombar."
        },
        {
            "nome": "Smartwatch Pro",
            "valor": 900.00,
            "quantidade_em_estoque": 30,
            "fabricante": "TechTime",
            "categoria": "Wearables",
            "descricao": "Relógio inteligente com GPS e monitoramento de atividades."
        },
        {
            "nome": "Caixa de Som Portátil",
            "valor": 400.00,
            "quantidade_em_estoque": 50,
            "fabricante": "BassBox",
            "categoria": "Acessórios",
            "descricao": "Caixa de som resistente à água com 20 horas de bateria."
        },
        {
            "nome": "Power Bank 20.000 mAh",
            "valor": 120.00,
            "quantidade_em_estoque": 50,
            "fabricante": "ChargeOn",
            "categoria": "Acessórios",
            "descricao": "Carregador portátil com 3 saídas USB."
        },
        {
            "nome": "Bicicleta Aro 29\"",
            "valor": 1500.00,
            "quantidade_em_estoque": 5,
            "fabricante": "BikeMaster",
            "categoria": "Esportes",
            "descricao": "Bicicleta de montanha aro 29 com suspensão."
        },
        {
            "nome": "Tênis Casual",
            "valor": 400.00,
            "quantidade_em_estoque": 45,
            "fabricante": "FootWear",
            "categoria": "Calçados",
            "descricao": "Tênis confortável e estiloso para o dia a dia."
        },
        {
            "nome": "Relógio Digital",
            "valor": 300.00,
            "quantidade_em_estoque": 50,
            "fabricante": "TimeSmart",
            "categoria": "Acessórios",
            "descricao": "Relógio digital com cronômetro e timer."
        },
        {
            "nome": "Bolsa de Viagem",
            "valor": 220.00,
            "quantidade_em_estoque": 40,
            "fabricante": "TravelBag",
            "categoria": "Moda",
            "descricao": "Bolsa de viagem espaçosa com várias divisórias."
        },
        {
            "nome": "Caderno Executivo",
            "valor": 25.00,
            "quantidade_em_estoque": 120,
            "fabricante": "PaperLux",
            "categoria": "Papeleria",
            "descricao": "Caderno com 200 folhas, capa dura e elástico."
        },
        {
            "nome": "Caneta Gel",
            "valor": 5.00,
            "quantidade_em_estoque": 600,
            "fabricante": "WritePerfect",
            "categoria": "Papeleria",
            "descricao": "Caneta gel com tinta azul e ponta média."
        },
        {
            "nome": "Caderno de Anotações",
            "valor": 18.00,
            "quantidade_em_estoque": 250,
            "fabricante": "NoteMaster",
            "categoria": "Papeleria",
            "descricao": "Caderno com 100 folhas em branco."
        },
        {
            "nome": "Pasta Organizadora",
            "valor": 40.00,
            "quantidade_em_estoque": 80,
            "fabricante": "OfficeGear",
            "categoria": "Papeleria",
            "descricao": "Pasta com 12 divisórias e fechamento com elástico."
        },
        {
            "nome": "Estojo Multiuso",
            "valor": 30.00,
            "quantidade_em_estoque": 100,
            "fabricante": "GearPack",
            "categoria": "Papeleria",
            "descricao": "Estojo com múltiplos compartimentos para material escolar."
        },
        {
            "nome": "Cafeteira Compacta",
            "valor": 200.00,
            "quantidade_em_estoque": 20,
            "fabricante": "BrewTech",
            "categoria": "Eletrodomésticos",
            "descricao": "Cafeteira com capacidade para 10 xícaras."
        },
        {
            "nome": "Liquidificador Prático",
            "valor": 300.00,
            "quantidade_em_estoque": 18,
            "fabricante": "MixMaster",
            "categoria": "Eletrodomésticos",
            "descricao": "Liquidificador com 6 velocidades e jarra de plástico."
        },
        {
            "nome": "Secador de Cabelo Profissional",
            "valor": 200.00,
            "quantidade_em_estoque": 35,
            "fabricante": "HairStyle",
            "categoria": "Beleza",
            "descricao": "Secador potente com difusor e 2 bicos."
        },
        {
            "nome": "Escova de Dentes Inteligente",
            "valor": 150.00,
            "quantidade_em_estoque": 50,
            "fabricante": "SmartBrush",
            "categoria": "Higiene",
            "descricao": "Escova elétrica com conectividade Bluetooth e aplicativo."
        },
        {
            "nome": "Aspirador de Pó Sem Fio",
            "valor": 110.00,
            "quantidade_em_estoque": 70,
            "fabricante": "CleanSweep",
            "categoria": "Eletrodomésticos",
            "descricao": "Aspirador sem fio leve e fácil de usar."
        },
        {
            "nome": "Cobertor Aquecido",
            "valor": 90.00,
            "quantidade_em_estoque": 60,
            "fabricante": "WarmCozy",
            "categoria": "Decoração",
            "descricao": "Cobertor aquecido com 3 níveis de temperatura."
        },
        {
            "nome": "Travesseiro Antialérgico",
            "valor": 180.00,
            "quantidade_em_estoque": 20,
            "fabricante": "SleepEasy",
            "categoria": "Camas",
            "descricao": "Travesseiro com enchimento hipoalergênico e formato ergonômico."
        },
        {
            "nome": "Cortina Decorativa",
            "valor": 220.00,
            "quantidade_em_estoque": 10,
            "fabricante": "HomeDecor",
            "categoria": "Decoração",
            "descricao": "Cortina com design moderno e várias opções de cores."
        },
        {
            "nome": "Despertador Digital",
            "valor": 70.00,
            "quantidade_em_estoque": 120,
            "fabricante": "WakeUp",
            "categoria": "Decoração",
            "descricao": "Despertador com projeção e rádio FM."
        },
        {
            "nome": "Quadro Motivacional",
            "valor": 90.00,
            "quantidade_em_estoque": 45,
            "fabricante": "ArtVision",
            "categoria": "Decoração",
            "descricao": "Quadro com mensagens inspiradoras, ideal para escritório."
        },
        {
            "nome": "Estante Modular",
            "valor": 400.00,
            "quantidade_em_estoque": 8,
            "fabricante": "FurniArt",
            "categoria": "Móveis",
            "descricao": "Estante modular de madeira, ideal para organização."
        },
        {
            "nome": "Mesa de Escritório",
            "valor": 900.00,
            "quantidade_em_estoque": 4,
            "fabricante": "OfficePlus",
            "categoria": "Móveis",
            "descricao": "Mesa de escritório com espaço para monitor e armazenamento."
        },
        {
            "nome": "Cama King Size",
            "valor": 2000.00,
            "quantidade_em_estoque": 5,
            "fabricante": "DreamSleep",
            "categoria": "Camas",
            "descricao": "Cama king size com colchão ortopédico."
        },
        {
            "nome": "Poltrona de Estar",
            "valor": 500.00,
            "quantidade_em_estoque": 12,
            "fabricante": "LoungeComfort",
            "categoria": "Móveis",
            "descricao": "Poltrona com design moderno e conforto extra."
        },
        {
            "nome": "Luminária de Mesa",
            "valor": 120.00,
            "quantidade_em_estoque": 25,
            "fabricante": "BrightLight",
            "categoria": "Iluminação",
            "descricao": "Luminária de mesa com ajuste de altura e ângulo."
        },
        {
            "nome": "Ventilador de Teto",
            "valor": 200.00,
            "quantidade_em_estoque": 15,
            "fabricante": "AirFlow",
            "categoria": "Eletrodomésticos",
            "descricao": "Ventilador de teto com 5 lâminas e controle remoto."
        },
        {
            "nome": "Batedeira de Alta Performance",
            "valor": 300.00,
            "quantidade_em_estoque": 10,
            "fabricante": "BakePro",
            "categoria": "Eletrodomésticos",
            "descricao": "Batedeira com 7 velocidades e tigela de vidro."
        },
        {
            "nome": "Churrasqueira Elétrica",
            "valor": 500.00,
            "quantidade_em_estoque": 8,
            "fabricante": "GrillMaster",
            "categoria": "Eletrodomésticos",
            "descricao": "Churrasqueira elétrica com grelha antiaderente."
        },
        {
            "nome": "Cesta de Lanche",
            "valor": 80.00,
            "quantidade_em_estoque": 25,
            "fabricante": "PicnicTime",
            "categoria": "Campismo",
            "descricao": "Cesta de lanche com forro térmico."
        },
        {
            "nome": "Barraca de Camping",
            "valor": 250.00,
            "quantidade_em_estoque": 15,
            "fabricante": "CampZone",
            "categoria": "Campismo",
            "descricao": "Barraca leve e compacta, ideal para 2 pessoas."
        },
        {
            "nome": "Raquete de Badminton",
            "valor": 150.00,
            "quantidade_em_estoque": 12,
            "fabricante": "SportMaster",
            "categoria": "Esportes",
            "descricao": "Raquete de badminton com estrutura leve e durável."
        },
        {
            "nome": "Bola de Basquete",
            "valor": 120.00,
            "quantidade_em_estoque": 40,
            "fabricante": "BasketPro",
            "categoria": "Esportes",
            "descricao": "Bola de basquete feita de couro sintético, tamanho oficial."
        },
        {
            "nome": "Cinta de Apoio",
            "valor": 50.00,
            "quantidade_em_estoque": 50,
            "fabricante": "FitPro",
            "categoria": "Acessórios",
            "descricao": "Cinta de apoio ajustável, ideal para treinos intensos."
        }
    ]


)      