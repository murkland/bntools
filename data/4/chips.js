const DATA_4_chips = [
    null,
    {
        "section": "standard",
        "index": 1,
        "name": {
            "en": "Cannon",
            "ja": "キャノン"
        },
        "description": {
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "ABC*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 2,
        "name": {
            "en": "HiCannon",
            "ja": "ハイキャノン"
        },
        "description": {
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "CDE",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 3,
        "name": {
            "en": "M-Cannon",
            "ja": "メガキャノン"
        },
        "description": {
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "EFG",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 4,
        "name": {
            "en": "AirShot",
            "ja": "エアシュート"
        },
        "description": {
            "en": "Knocks\nenemy\nback 1",
            "ja": "ヒットしたあいてを\n1マスおくへおす\nくうきほう"
        },
        "element": "wind",
        "codes": "ASV*",
        "mb": 6,
        "version": null,
        "stars": 2,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 27,
        "name": {
            "en": "Blizzard",
            "ja": "ブリザード"
        },
        "description": {
            "en": "Snowstorm\nattack!\nIce Panel",
            "ja": "ほうしゃじょうに\nふぶき攻撃！\nパネルをこおりに"
        },
        "element": "aqua",
        "codes": "HJV",
        "mb": 26,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 28,
        "name": {
            "en": "HeatBrth",
            "ja": "ヒートブレス"
        },
        "description": {
            "en": "Magma\nFirestorm\nattack!",
            "ja": "ほうしゃじょうに\nかえん攻撃！\nパネルをマグマに"
        },
        "element": "fire",
        "codes": "DKO*",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 101,
        "name": {
            "en": "Silence",
            "ja": "サイレンス"
        },
        "description": {
            "en": "MuteAnt\nto blind\nenemy",
            "ja": "ララミュートをおく\nえんそうちゅう\nあいてはもうもくに"
        },
        "element": "obstacle",
        "codes": "CMR*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 42,
        "name": {
            "en": "Tornado",
            "ja": "トルネード"
        },
        "description": {
            "en": "Creates 8\nwhirlwind\nahead",
            "ja": "2マス前方に\n8ヒットのたつまき\nを発生させる！"
        },
        "element": "wind",
        "codes": "ELT",
        "mb": 22,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 18,
        "name": {
            "en": "WideSht1",
            "ja": "ワイドショット1"
        },
        "description": {
            "en": "Fires 3sq\nshotgun\nblast!",
            "ja": "たて3マスのはばを\nもつワイドショット\nを前方へはなつ！"
        },
        "element": "aqua",
        "codes": "CDE*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 19,
        "name": {
            "en": "WideSht2",
            "ja": "ワイドショット2"
        },
        "description": {
            "en": "Fires 3sq\nshotgun\nblast!",
            "ja": "たて3マスのはばを\nもつワイドショット\nを前方へはなつ！"
        },
        "element": "aqua",
        "codes": "LMN",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 20,
        "name": {
            "en": "WideSht3",
            "ja": "ワイドショット3"
        },
        "description": {
            "en": "Fires 3sq\nshotgun\nblast!",
            "ja": "たて3マスのはばを\nもつワイドショット\nを前方へはなつ！"
        },
        "element": "aqua",
        "codes": "STU",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 21,
        "name": {
            "en": "FlmLine1",
            "ja": "フレイムライン1"
        },
        "description": {
            "en": "Firebeam\n2sq ahead\n3sq long!",
            "ja": "2マス前方の\nたて3マスに\nひばしら攻撃！"
        },
        "element": "fire",
        "codes": "FGH*",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 22,
        "name": {
            "en": "FlmLine2",
            "ja": "フレイムライン2"
        },
        "description": {
            "en": "Firebeam\n2sq ahead\n3sq long!",
            "ja": "2マス前方の\nたて3マスに\nひばしら攻撃！"
        },
        "element": "fire",
        "codes": "DEF",
        "mb": 26,
        "version": null,
        "stars": 1,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 23,
        "name": {
            "en": "FlmLine3",
            "ja": "フレイムライン3"
        },
        "description": {
            "en": "Firebeam\n2sq ahead\n3sq long!",
            "ja": "2マス前方の\nたて3マスに\nひばしら攻撃！"
        },
        "element": "fire",
        "codes": "JKL",
        "mb": 54,
        "version": null,
        "stars": 1,
        "damage": 170,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 5,
        "name": {
            "en": "Vulcan1",
            "ja": "バルカン1"
        },
        "description": {
            "en": "3-shot to\npierce 1\npanel!",
            "ja": "3れんしゃバルカン\nヒットすると1マス\nおくにもかんつう！"
        },
        "element": "null",
        "codes": "ESV*",
        "mb": 6,
        "version": null,
        "stars": 1,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 6,
        "name": {
            "en": "Vulcan2",
            "ja": "バルカン2"
        },
        "description": {
            "en": "5-shot to\npierce 1\npanel!",
            "ja": "5れんしゃバルカン\nヒットすると1マス\nおくにもかんつう！"
        },
        "element": "null",
        "codes": "BHO",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 7,
        "name": {
            "en": "Vulcan3",
            "ja": "バルカン3"
        },
        "description": {
            "en": "7-shot to\npierce 1\npanel!",
            "ja": "7れんしゃバルカン\nヒットすると1マス\nおくにもかんつう！"
        },
        "element": "null",
        "codes": "OWY",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 8,
        "name": {
            "en": "Spreader",
            "ja": "スプレッドガン"
        },
        "description": {
            "en": "Creates a\nlarge\nexplosion",
            "ja": "ヒットすると\nまわりの1マスに\nゆうばく！"
        },
        "element": "null",
        "codes": "LMN*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 9,
        "name": {
            "en": "HeatShot",
            "ja": "ヒートショット"
        },
        "description": {
            "en": "Explodes\n1 square\nbehind",
            "ja": "ヒットすると\nおくの1マスに\nゆうばくする！"
        },
        "element": "fire",
        "codes": "BCD*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 10,
        "name": {
            "en": "Heat-V",
            "ja": "ヒートブイ"
        },
        "description": {
            "en": "Explodes\n2 diag.\nsquares",
            "ja": "ヒットすると\nななめおく2マスに\nゆうばくする"
        },
        "element": "fire",
        "codes": "CDE",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 11,
        "name": {
            "en": "HeatSide",
            "ja": "ヒートサイド"
        },
        "description": {
            "en": "Explodes\nup,down\non hit",
            "ja": "ヒットすると\n上下の2マスに\nゆうばくする"
        },
        "element": "fire",
        "codes": "DEF",
        "mb": 44,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 12,
        "name": {
            "en": "Bubbler",
            "ja": "バブルショット"
        },
        "description": {
            "en": "Explodes\n1 square\nbehind",
            "ja": "ヒットすると\nおくの1マスに\nゆうばくする！"
        },
        "element": "aqua",
        "codes": "PQR*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 13,
        "name": {
            "en": "Bub-V",
            "ja": "バブルブイ"
        },
        "description": {
            "en": "Explodes\n2 diag.\nsquares",
            "ja": "ヒットすると\nななめおく2マスに\nゆうばくする"
        },
        "element": "aqua",
        "codes": "CDE",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 14,
        "name": {
            "en": "BublSide",
            "ja": "バブルサイド"
        },
        "description": {
            "en": "Explodes\nup,down\non hit",
            "ja": "ヒットすると\n上下の2マスに\nゆうばくする"
        },
        "element": "aqua",
        "codes": "DEF",
        "mb": 44,
        "version": null,
        "stars": 3,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 35,
        "name": {
            "en": "ElemFlar",
            "ja": "エレメントフレア"
        },
        "description": {
            "en": "3-sq atk\nPowerful\non magma!",
            "ja": "よこ3マスの攻撃\nマグマの上だと\nパワーアップ！"
        },
        "element": "fire",
        "codes": "KNP",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 36,
        "name": {
            "en": "ElemIce",
            "ja": "エレメントアイス"
        },
        "description": {
            "en": "3-sq atk\nPowerful\non ice",
            "ja": "よこ3マスの攻撃\nこおりの上だと\nパワーアップ！"
        },
        "element": "aqua",
        "codes": "HQV",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 43,
        "name": {
            "en": "Static",
            "ja": "ノイズストーム"
        },
        "description": {
            "en": "A static\nblast 2sq\nahead",
            "ja": "2マス前にノイズの\nアラシ！バグがある\nとパワーアップする"
        },
        "element": "null",
        "codes": "BGZ*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 147,
        "name": {
            "en": "LifeSync",
            "ja": "ライフシンクロ"
        },
        "description": {
            "en": "Makes\nenmy's HP\nsame",
            "ja": "2マス前のてきに\nカーソル！てきの\nHPをおなじにする"
        },
        "element": "null",
        "codes": "NQY",
        "mb": 12,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 44,
        "name": {
            "en": "MiniBomb",
            "ja": "ミニボム"
        },
        "description": {
            "en": "Throws a\nbomb 3\nsquares",
            "ja": "3マス前におちる\nボムをなげつける"
        },
        "element": "null",
        "codes": "BLT*",
        "mb": 5,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 45,
        "name": {
            "en": "EnergBom",
            "ja": "エナジーボム"
        },
        "description": {
            "en": "Throws\nbomb 3sq\nahead",
            "ja": "3マス前に\nれんぞくばくふうの\nボムをなげつける"
        },
        "element": "null",
        "codes": "ENT*",
        "mb": 11,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 46,
        "name": {
            "en": "MegEnBom",
            "ja": "メガエナジーボム"
        },
        "description": {
            "en": "Throws\nbomb 3sq\nahead",
            "ja": "3マス前に\nれんぞくばくふうの\nボムをなげつける"
        },
        "element": "null",
        "codes": "DJW",
        "mb": 30,
        "version": null,
        "stars": 4,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 24,
        "name": {
            "en": "GunSol1",
            "ja": "ガンデルソル1"
        },
        "description": {
            "en": "Sunshine\nappear w/\nButton",
            "ja": "ボタンをおしつづけ\nると2マス前方の\nたて3マスに日の光"
        },
        "element": "null",
        "codes": "AGM*",
        "mb": 15,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 25,
        "name": {
            "en": "GunSol2",
            "ja": "ガンデルソル2"
        },
        "description": {
            "en": "Sunshine\nappear w/\nButton",
            "ja": "ボタンをおしつづけ\nると2マス前方の\nたて3マスに日の光"
        },
        "element": "null",
        "codes": "BGS",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 26,
        "name": {
            "en": "GunSol3",
            "ja": "ガンデルソル3"
        },
        "description": {
            "en": "Sunshine\nappear w/\nButton",
            "ja": "ボタンをおしつづけ\nると2マス前方の\nたて3マスに日の光"
        },
        "element": "null",
        "codes": "CGT",
        "mb": 35,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 39,
        "name": {
            "en": "MagBolt1",
            "ja": "マグボルト1"
        },
        "description": {
            "en": "Shocks an\nenemy\nahead",
            "ja": "あいてを目の前の\nマスにすいつけて\n電気ショック！"
        },
        "element": "elec",
        "codes": "BCD",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 40,
        "name": {
            "en": "MagBolt2",
            "ja": "マグボルト2"
        },
        "description": {
            "en": "Shocks an\nenemy\nahead",
            "ja": "あいてを目の前の\nマスにすいつけて\n電気ショック！"
        },
        "element": "elec",
        "codes": "EFG",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 41,
        "name": {
            "en": "MagBolt3",
            "ja": "マグボルト3"
        },
        "description": {
            "en": "Shocks an\nenemy\nahead",
            "ja": "あいてを目の前の\nマスにすいつけて\n電気ショック！"
        },
        "element": "elec",
        "codes": "ABC",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 51,
        "name": {
            "en": "Binder1",
            "ja": "バウンドノート1"
        },
        "description": {
            "en": "Fires a\nsonic\nblast",
            "ja": "1マスおきにはねる\nおんぷを2マス前に\nなげつける！"
        },
        "element": "null",
        "codes": "COS*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 52,
        "name": {
            "en": "Binder2",
            "ja": "バウンドノート2"
        },
        "description": {
            "en": "Fires a\nsonic\nblast",
            "ja": "1マスおきにはねる\nおんぷを2マス前に\nなげつける！"
        },
        "element": "null",
        "codes": "ATY",
        "mb": 17,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 53,
        "name": {
            "en": "Binder3",
            "ja": "バウンドノート3"
        },
        "description": {
            "en": "Fires a\nsonic\nblast",
            "ja": "1マスおきにはねる\nおんぷを2マス前に\nなげつける！"
        },
        "element": "null",
        "codes": "EIO",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 50,
        "name": {
            "en": "BugBomb",
            "ja": "バグボム"
        },
        "description": {
            "en": "Throws a\nbug-bomb\n3sq ahead",
            "ja": "あいてをバグらせる\nバグボムを3マス前\nになげつける"
        },
        "element": "null",
        "codes": "BGZ*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 29,
        "name": {
            "en": "ElecShok",
            "ja": "エレキショック"
        },
        "description": {
            "en": "Cracker\nElectric\nblast",
            "ja": "ほうしゃじょうに\nほうでん攻撃！\nパネルをヒビに"
        },
        "element": "elec",
        "codes": "JLS*",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 30,
        "name": {
            "en": "WoodPwdr",
            "ja": "ウッディパウダー"
        },
        "description": {
            "en": "Changes\npanels\nto grass",
            "ja": "ほうしゃじょうに\nほうし攻撃！\nパネルをくさむらに"
        },
        "element": "wood",
        "codes": "FTW*",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 47,
        "name": {
            "en": "Ball",
            "ja": "ホウガン"
        },
        "description": {
            "en": "Breaks\n3rd panel\nahead",
            "ja": "3マス前に\nホウガンをなげる！\nパネルはかい攻撃！"
        },
        "element": "break",
        "codes": "BTV*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 49,
        "name": {
            "en": "Geyser",
            "ja": "カンケツセン"
        },
        "description": {
            "en": "Geyser 3\nsquares\nforward",
            "ja": "3マス前になげつけ\nあなマスにおちると\n水がふきだす！"
        },
        "element": "aqua",
        "codes": "BLV",
        "mb": 38,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 48,
        "name": {
            "en": "BlkBomb",
            "ja": "ブラックボム"
        },
        "description": {
            "en": "Firebomb\nhits 3rd\nsq ahead!",
            "ja": "ふはつだんを\n3マス前になげる！\n炎攻撃でバクハツ！"
        },
        "element": "fire",
        "codes": "DHZ",
        "mb": 55,
        "version": null,
        "stars": 4,
        "damage": 210,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 31,
        "name": {
            "en": "SandRing",
            "ja": "サンドリング"
        },
        "description": {
            "en": "Opens a\npitfall\ntrap",
            "ja": "あたるとアリジゴク\nを発生させる\nリングを前方へ！"
        },
        "element": "null",
        "codes": "CRS*",
        "mb": 8,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 54,
        "name": {
            "en": "Sword",
            "ja": "ソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 1",
            "ja": "目の前のてきを\nきりつける！\n攻撃はんいは1マス"
        },
        "element": "sword",
        "codes": "ELS",
        "mb": 9,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 55,
        "name": {
            "en": "WideSwrd",
            "ja": "ワイドソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\nきりつける！\nはんいはたて3マス"
        },
        "element": "sword",
        "codes": "ELS",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 56,
        "name": {
            "en": "LongSwrd",
            "ja": "ロングソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 2",
            "ja": "目の前のてきを\nきりつける！\nはんいはよこ2マス"
        },
        "element": "sword",
        "codes": "ELS",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 57,
        "name": {
            "en": "WideBlde",
            "ja": "ワイドブレード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\nきりつける！\nはんいはたて3マス"
        },
        "element": "sword",
        "codes": "CKS",
        "mb": 38,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 58,
        "name": {
            "en": "LongBlde",
            "ja": "ロングブレード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 2",
            "ja": "目の前のてきを\nきりつける！\nはんいはよこ2マス"
        },
        "element": "sword",
        "codes": "GRS",
        "mb": 40,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 62,
        "name": {
            "en": "WindRack",
            "ja": "フウジンラケット"
        },
        "description": {
            "en": "Blow enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\n風でふきとばす！\nはんいはたて3マス"
        },
        "element": "wind",
        "codes": "ALR*",
        "mb": 23,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 59,
        "name": {
            "en": "CustSwrd",
            "ja": "カスタムソード"
        },
        "description": {
            "en": "Cust\nGauge=\nAtk Str",
            "ja": "カスタムゲージが\nマンタンにちかい\nほど攻撃力アップ！"
        },
        "element": "sword",
        "codes": "BPS",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 60,
        "name": {
            "en": "VarSwrd",
            "ja": "バリアブルソード"
        },
        "description": {
            "en": "A magical\nshifting\nsword",
            "ja": "へんげんじざいの\nテクニカルソード"
        },
        "element": "sword",
        "codes": "CJV",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 61,
        "name": {
            "en": "Slasher",
            "ja": "イアイフォーム"
        },
        "description": {
            "en": "Cut while\nA Button\nis held!",
            "ja": "Aボタンをおして\nいる間に入ってくる\nてきをきる！"
        },
        "element": "sword",
        "codes": "FHR",
        "mb": 18,
        "version": null,
        "stars": 3,
        "damage": 240,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 15,
        "name": {
            "en": "Thunder1",
            "ja": "サンダーボール1"
        },
        "description": {
            "en": "Pralyzing\nelectric\nattack!",
            "ja": "ゆっくりとすすむ\nついび電気攻撃\nあたるとマヒする！"
        },
        "element": "elec",
        "codes": "BLP*",
        "mb": 7,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 16,
        "name": {
            "en": "Thunder2",
            "ja": "サンダーボール2"
        },
        "description": {
            "en": "Pralyzing\nelectric\nattack!",
            "ja": "ゆっくりとすすむ\nついび電気攻撃\nあたるとマヒする！"
        },
        "element": "elec",
        "codes": "HPS",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 17,
        "name": {
            "en": "Thunder3",
            "ja": "サンダーボール3"
        },
        "description": {
            "en": "Pralyzing\nelectric\nattack!",
            "ja": "ゆっくりとすすむ\nついび電気攻撃\nあたるとマヒする！"
        },
        "element": "elec",
        "codes": "ITW",
        "mb": 33,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 66,
        "name": {
            "en": "Counter1",
            "ja": "カウンター1"
        },
        "description": {
            "en": "Counter-\nattack to\nenemy",
            "ja": "攻撃するしゅんかん\nのてきにカウンター\nどこからでもヒット"
        },
        "element": "null",
        "codes": "FMT*",
        "mb": 14,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 67,
        "name": {
            "en": "Counter2",
            "ja": "カウンター2"
        },
        "description": {
            "en": "Counter-\nattack to\nenemy",
            "ja": "攻撃するしゅんかん\nのてきにカウンター\nどこからでもヒット"
        },
        "element": "null",
        "codes": "BHL*",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 68,
        "name": {
            "en": "Counter3",
            "ja": "カウンター3"
        },
        "description": {
            "en": "Counter-\nattack to\nenemy",
            "ja": "攻撃するしゅんかん\nのてきにカウンター\nどこからでもヒット"
        },
        "element": "null",
        "codes": "ANV",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 63,
        "name": {
            "en": "AirHoc1",
            "ja": "エアホッケー1"
        },
        "description": {
            "en": "Ricochet\nattack to\nright",
            "ja": "かべにはんしゃする\nエアホッケーを\nななめ右になげる！"
        },
        "element": "break",
        "codes": "DEF*",
        "mb": 20,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 64,
        "name": {
            "en": "AirHoc2",
            "ja": "エアホッケー2"
        },
        "description": {
            "en": "Ricochet\nattack to\nright",
            "ja": "かべにはんしゃする\nエアホッケーを\nななめ右になげる！"
        },
        "element": "break",
        "codes": "IJK",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 65,
        "name": {
            "en": "AirHoc3",
            "ja": "エアホッケー3"
        },
        "description": {
            "en": "Ricochet\nattack to\nright",
            "ja": "かべにはんしゃする\nエアホッケーを\nななめ右になげる！"
        },
        "element": "break",
        "codes": "UVW",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 82,
        "name": {
            "en": "CircGun1",
            "ja": "サークルガン1"
        },
        "description": {
            "en": "Stop site\nw/ Button\nand attck",
            "ja": "まわるサイトを\nボタンでとめて\nショット攻撃！"
        },
        "element": "null",
        "codes": "HTZ",
        "mb": 28,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 83,
        "name": {
            "en": "CircGun2",
            "ja": "サークルガン2"
        },
        "description": {
            "en": "Stop site\nw/ Button\nand attck",
            "ja": "まわるサイトを\nボタンでとめて\nショット攻撃！"
        },
        "element": "null",
        "codes": "DGT",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 84,
        "name": {
            "en": "CircGun3",
            "ja": "サークルガン3"
        },
        "description": {
            "en": "Stop site\nw/ Button\nand attck",
            "ja": "まわるサイトを\nボタンでとめて\nショット攻撃！"
        },
        "element": "null",
        "codes": "JMR",
        "mb": 52,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 32,
        "name": {
            "en": "TwnFng1",
            "ja": "ツインファング1"
        },
        "description": {
            "en": "Launch 2\nfangs up\nand down",
            "ja": "自分の上下のれつに\n2本のキバを\nハッシャする！"
        },
        "element": "null",
        "codes": "ABC*",
        "mb": 13,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 33,
        "name": {
            "en": "TwnFng2",
            "ja": "ツインファング2"
        },
        "description": {
            "en": "Launch 2\nfangs up\nand down",
            "ja": "自分の上下のれつに\n2本のキバを\nハッシャする！"
        },
        "element": "null",
        "codes": "OPQ",
        "mb": 26,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 34,
        "name": {
            "en": "TwnFng3",
            "ja": "ツインファング3"
        },
        "description": {
            "en": "Launch 2\nfangs up\nand down",
            "ja": "自分の上下のれつに\n2本のキバを\nハッシャする！"
        },
        "element": "null",
        "codes": "FGH",
        "mb": 39,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 76,
        "name": {
            "en": "WhitWeb1",
            "ja": "ホワイトウェブ1"
        },
        "description": {
            "en": "Stretches\nweb over\nenmy area",
            "ja": "てきエリアの上の\nれつにくものすを\n発生させる"
        },
        "element": "wood",
        "codes": "DLR*",
        "mb": 26,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 77,
        "name": {
            "en": "WhitWeb2",
            "ja": "ホワイトウェブ2"
        },
        "description": {
            "en": "Stretches\nweb on\nenmy area",
            "ja": "てきエリアのまん中\nれつにくものすを\n発生させる"
        },
        "element": "wood",
        "codes": "CEY*",
        "mb": 36,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 78,
        "name": {
            "en": "WhitWeb3",
            "ja": "ホワイトウェブ3"
        },
        "description": {
            "en": "Stretches\nweb under\nenmy area",
            "ja": "てきエリアの下の\nれつにくものすを\n発生させる"
        },
        "element": "wood",
        "codes": "KOV*",
        "mb": 46,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 69,
        "name": {
            "en": "Boomer1",
            "ja": "ブーメラン1"
        },
        "description": {
            "en": "Boomerang\nencircles\nfield",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "LMN",
        "mb": 16,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 70,
        "name": {
            "en": "Boomer2",
            "ja": "ブーメラン2"
        },
        "description": {
            "en": "Boomerang\nencircles\nfield",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "LMN",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 71,
        "name": {
            "en": "Boomer3",
            "ja": "ブーメラン3"
        },
        "description": {
            "en": "Boomerang\nencircles\nfield",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "STU",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 72,
        "name": {
            "en": "SidBmbo1",
            "ja": "サイドバンブー1"
        },
        "description": {
            "en": "Lance\nattck 3sq\nahead",
            "ja": "3マス前方のれつの\n上のくうかんから\n2マスのたけやり！"
        },
        "element": "wood",
        "codes": "BIR*",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 73,
        "name": {
            "en": "SidBmbo2",
            "ja": "サイドバンブー2"
        },
        "description": {
            "en": "Lance\nattck 3sq\nahead",
            "ja": "3マス前方のれつの\n上のくうかんから\n2マスのたけやり！"
        },
        "element": "wood",
        "codes": "HOS",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 74,
        "name": {
            "en": "SidBmbo3",
            "ja": "サイドバンブー3"
        },
        "description": {
            "en": "Lance\nattck 3sq\nahead",
            "ja": "3マス前方のれつの\n上のくうかんから\n2マスのたけやり！"
        },
        "element": "wood",
        "codes": "AFU",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 75,
        "name": {
            "en": "Lance",
            "ja": "バンブーランス"
        },
        "description": {
            "en": "Lances\nthrough\nback line",
            "ja": "てきエリアの右はし\nたてれつにとつぜん\nたけやりが発生！"
        },
        "element": "wood",
        "codes": "AGR*",
        "mb": 42,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 132,
        "name": {
            "en": "Hole",
            "ja": "ダークホール"
        },
        "description": {
            "en": "Appears\nHole\nin front",
            "ja": "目の前のマスに\nダークホールを\nしゅつげんさせる！"
        },
        "element": "null",
        "codes": "*",
        "mb": 23,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 96,
        "name": {
            "en": "Wind",
            "ja": "トップウ"
        },
        "description": {
            "en": "WindBox\nblows at\nenmy area",
            "ja": "ウインドボックスを\nおき てきエリアに\n風をふかせる"
        },
        "element": "wind",
        "codes": "*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 97,
        "name": {
            "en": "Fan",
            "ja": "スイコミ"
        },
        "description": {
            "en": "VacuumFan\npulls\nenemies",
            "ja": "バキュームファンを\nおき 風でてきを\nすいよせる"
        },
        "element": "wind",
        "codes": "*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 90,
        "name": {
            "en": "BoyBomb1",
            "ja": "ボーイズボム1"
        },
        "description": {
            "en": "Places\nBoyBom in\nyour area",
            "ja": "自分のエリアないに\nボーイズボム！\nおすとてきエリアへ"
        },
        "element": "obstacle",
        "codes": "EJM",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 220,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 91,
        "name": {
            "en": "BoyBomb2",
            "ja": "ボーイズボム2"
        },
        "description": {
            "en": "Places\nBoyBom in\nyour area",
            "ja": "自分のエリアないに\nボーイズボム！\nおすとてきエリアへ"
        },
        "element": "obstacle",
        "codes": "ISW",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 250,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 92,
        "name": {
            "en": "BoyBomb3",
            "ja": "ボーイズボム3"
        },
        "description": {
            "en": "Places\nBoyBom in\nyour area",
            "ja": "自分のエリアないに\nボーイズボム！\nおすとてきエリアへ"
        },
        "element": "obstacle",
        "codes": "GTV",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 280,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 103,
        "name": {
            "en": "Guard1",
            "ja": "メットガード1"
        },
        "description": {
            "en": "Repels\nenemy's\nattack",
            "ja": "タイミングガードし\n攻撃をしょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "ALV*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 104,
        "name": {
            "en": "Guard2",
            "ja": "メットガード2"
        },
        "description": {
            "en": "Repels\nenemy's\nattack",
            "ja": "タイミングガードし\n攻撃をしょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "CGP*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 105,
        "name": {
            "en": "Guard3",
            "ja": "メットガード3"
        },
        "description": {
            "en": "Repels\nenemy's\nattack",
            "ja": "タイミングガードし\n攻撃をしょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "FRT*",
        "mb": 16,
        "version": null,
        "stars": 3,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 106,
        "name": {
            "en": "CrakOut",
            "ja": "クラックアウト"
        },
        "description": {
            "en": "Destroys\n1 panel\nin front",
            "ja": "パネルはかい攻撃！\n目の前の1マスを\nけしさってしまう"
        },
        "element": "terrain",
        "codes": "*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 107,
        "name": {
            "en": "DublCrak",
            "ja": "ダブルクラック"
        },
        "description": {
            "en": "Destroys\n2 panels\nin front",
            "ja": "パネルはかい攻撃！\n前のよこ2マスを\nけしさってしまう"
        },
        "element": "terrain",
        "codes": "BLR*",
        "mb": 7,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 108,
        "name": {
            "en": "TripCrak",
            "ja": "トリプルクラック"
        },
        "description": {
            "en": "Destroys\n3 panels\nin front",
            "ja": "パネルはかい攻撃！\n前のたて3マスを\nけしさってしまう"
        },
        "element": "terrain",
        "codes": "BLR*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 86,
        "name": {
            "en": "Magnum",
            "ja": "マグナム"
        },
        "description": {
            "en": "Cursor\ndestroys\npanel!",
            "ja": "カーソルをとめて\nパネルをはかいする\nマグナムをハッシャ"
        },
        "element": "terrain",
        "codes": "HQV",
        "mb": 52,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 120,
        "name": {
            "en": "MetaGel",
            "ja": "スチールゼリー"
        },
        "description": {
            "en": "Gel attck\nsteals a\npanel!",
            "ja": "てきエリア左はしに\nパネルをぬりかえる\nゼリー攻撃！"
        },
        "element": "aqua",
        "codes": "KTZ",
        "mb": 52,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 85,
        "name": {
            "en": "Snake",
            "ja": "カモンスネーク"
        },
        "description": {
            "en": "Snake\nfrom hole\nin area",
            "ja": "自分のエリアの\nあなマスから\nこヘビがとんでいく"
        },
        "element": "null",
        "codes": "DMR",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 93,
        "name": {
            "en": "TimeBomb",
            "ja": "カウントボム"
        },
        "description": {
            "en": "An area-\nwide time\nbomb",
            "ja": "てきエリアにじげん\nばくだんをセットし\nエリア中にばくはつ"
        },
        "element": "obstacle",
        "codes": "JKL",
        "mb": 55,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 94,
        "name": {
            "en": "Mine",
            "ja": "ステルスマイン"
        },
        "description": {
            "en": "Places a\nmine in\nenmy area",
            "ja": "てきエリアのどこか\nに見えないじらいを\nセットする！"
        },
        "element": "obstacle",
        "codes": "CHZ",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": 300,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 95,
        "name": {
            "en": "RockCube",
            "ja": "ストーンキューブ"
        },
        "description": {
            "en": "Places a\nrock cube\nin front",
            "ja": "目の前のマスに\nストーンキューブを\n発生させる"
        },
        "element": "obstacle",
        "codes": "*",
        "mb": 6,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 98,
        "name": {
            "en": "Fanfare",
            "ja": "オウエンカ"
        },
        "description": {
            "en": "Take no\ndmg for a\nwhile",
            "ja": "ララパッパをおく\nえんそうちゅう\n自分がむてきに！"
        },
        "element": "obstacle",
        "codes": "EGN*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 99,
        "name": {
            "en": "Discord",
            "ja": "ディスコード"
        },
        "description": {
            "en": "Confuses\nenemies\nw/ music",
            "ja": "ララチューバをおく\nえんそうちゅう\nあいてがこんらん！"
        },
        "element": "obstacle",
        "codes": "DTV*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 100,
        "name": {
            "en": "Timpani",
            "ja": "ティンパニー"
        },
        "description": {
            "en": "Paralyzes\nenemies\nw/ music",
            "ja": "ララボーンをおく\nえんそうちゅう\nじしんであしどめ！"
        },
        "element": "obstacle",
        "codes": "PTZ*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 102,
        "name": {
            "en": "VDoll",
            "ja": "ワラニンギョウ"
        },
        "description": {
            "en": "Throws\nVDoll\nahead",
            "ja": "おそろしいノロイの\nワラニンギョウを\n3マス前方になげる"
        },
        "element": "obstacle",
        "codes": "IOY",
        "mb": 58,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 87,
        "name": {
            "en": "BigHamr1",
            "ja": "ビッグハンマー1"
        },
        "description": {
            "en": "Hammr atk\nsmashes\nin front!",
            "ja": "目の前にハンマーを\nふりおろすせきぞう\nをおく！"
        },
        "element": "break",
        "codes": "BOR",
        "mb": 22,
        "version": null,
        "stars": 1,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 88,
        "name": {
            "en": "BigHamr2",
            "ja": "ビッグハンマー2"
        },
        "description": {
            "en": "Hammr atk\nsmashes\nin front!",
            "ja": "目の前にハンマーを\nふりおろすせきぞう\nをおく！"
        },
        "element": "break",
        "codes": "GJW",
        "mb": 33,
        "version": null,
        "stars": 2,
        "damage": 220,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 89,
        "name": {
            "en": "BigHamr3",
            "ja": "ビッグハンマー3"
        },
        "description": {
            "en": "Hammr atk\nsmashes\nin front!",
            "ja": "目の前にハンマーを\nふりおろすせきぞう\nをおく！"
        },
        "element": "break",
        "codes": "DVZ",
        "mb": 44,
        "version": null,
        "stars": 3,
        "damage": 280,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 109,
        "name": {
            "en": "Recov10",
            "ja": "リカバリー10"
        },
        "description": {
            "en": "Recovers\n10HP",
            "ja": "HPを10\nかいふくする"
        },
        "element": "recovery",
        "codes": "ALN*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 110,
        "name": {
            "en": "Recov30",
            "ja": "リカバリー30"
        },
        "description": {
            "en": "Recovers\n30HP",
            "ja": "HPを30\nかいふくする"
        },
        "element": "recovery",
        "codes": "FHR*",
        "mb": 16,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 111,
        "name": {
            "en": "Recov50",
            "ja": "リカバリー50"
        },
        "description": {
            "en": "Recovers\n50HP",
            "ja": "HPを50\nかいふくする"
        },
        "element": "recovery",
        "codes": "ELS*",
        "mb": 24,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 112,
        "name": {
            "en": "Recov80",
            "ja": "リカバリー80"
        },
        "description": {
            "en": "Recovers\n80HP",
            "ja": "HPを80\nかいふくする"
        },
        "element": "recovery",
        "codes": "BJO*",
        "mb": 32,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 113,
        "name": {
            "en": "Recov120",
            "ja": "リカバリー120"
        },
        "description": {
            "en": "Recovers\n120HP",
            "ja": "HPを120\nかいふくする"
        },
        "element": "recovery",
        "codes": "FJQ*",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 114,
        "name": {
            "en": "Recov150",
            "ja": "リカバリー150"
        },
        "description": {
            "en": "Recovers\n150HP",
            "ja": "HPを150\nかいふくする"
        },
        "element": "recovery",
        "codes": "CTZ",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 115,
        "name": {
            "en": "Recov200",
            "ja": "リカバリー200"
        },
        "description": {
            "en": "Recovers\n200HP",
            "ja": "HPを200\nかいふくする"
        },
        "element": "recovery",
        "codes": "HMW",
        "mb": 56,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 116,
        "name": {
            "en": "Recov300",
            "ja": "リカバリー300"
        },
        "description": {
            "en": "Recovers\n300HP",
            "ja": "HPを300\nかいふくする"
        },
        "element": "recovery",
        "codes": "JNY",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 117,
        "name": {
            "en": "Repair",
            "ja": "リペア-"
        },
        "description": {
            "en": "Recovers\nHP of\nitems",
            "ja": "キューブなどの\nおきもののHPを\nかいふくさせる"
        },
        "element": "recovery",
        "codes": "IPR*",
        "mb": 5,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 118,
        "name": {
            "en": "PanlGrab",
            "ja": "パネルスチール"
        },
        "description": {
            "en": "Steals 1\nenemy\nsquare!",
            "ja": "前方のてきエリアの\n1マスを 自分の\nエリアにぬりかえる"
        },
        "element": "null",
        "codes": "KOY",
        "mb": 6,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 119,
        "name": {
            "en": "AreaGrab",
            "ja": "エリアスチール"
        },
        "description": {
            "en": "Steals\nleft edge\nfrom enmy",
            "ja": "てきエリアの左はし\nたて1れつを自分の\nエリアにぬりかえる"
        },
        "element": "null",
        "codes": "EMS*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 122,
        "name": {
            "en": "GrabRvng",
            "ja": "スチールリベンジ"
        },
        "description": {
            "en": "Retaliate\nstolen\npanels!",
            "ja": "ぬすまれたパネルの\nかずだけ あいてに\nてんばつがくだる！"
        },
        "element": "null",
        "codes": "DJN",
        "mb": 48,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 121,
        "name": {
            "en": "GrabBnsh",
            "ja": "スチールパニシュ"
        },
        "description": {
            "en": "Retaliate\nstolen\npanels!",
            "ja": "ぬすまれたパネルの\nかずだけ あいてに\nてんばつがくだる！"
        },
        "element": "null",
        "codes": "EKP",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 127,
        "name": {
            "en": "SloGauge",
            "ja": "ヘビーゲージ"
        },
        "description": {
            "en": "CustGauge\nTemporary\nslow-down",
            "ja": "しばらくのあいだ\nカスタムゲージの\nスピードがおちる"
        },
        "element": "null",
        "codes": "EHV*",
        "mb": 22,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 128,
        "name": {
            "en": "FstGauge",
            "ja": "クイックゲージ"
        },
        "description": {
            "en": "CustGauge\nTemporary\nspeed-up",
            "ja": "しばらくのあいだ\nカスタムゲージの\nスピードがあがる"
        },
        "element": "null",
        "codes": "IQU*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 123,
        "name": {
            "en": "PnlRetrn",
            "ja": "パネルリターン"
        },
        "description": {
            "en": "Fix your\narea's\npanels",
            "ja": "自分のエリアの\nパネルをノーマルに\nもどす！"
        },
        "element": "null",
        "codes": "*",
        "mb": 14,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 124,
        "name": {
            "en": "Geddon1",
            "ja": "デスマッチ1"
        },
        "description": {
            "en": "Cracks\nall panel\non screen",
            "ja": "パネルのあるマスが\nすべてヒビに！"
        },
        "element": "terrain",
        "codes": "JKW",
        "mb": 34,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 125,
        "name": {
            "en": "Geddon2",
            "ja": "デスマッチ2"
        },
        "description": {
            "en": "Breaks\nall empty\npanels",
            "ja": "あいているマスが\nすべてこわれる！"
        },
        "element": "terrain",
        "codes": "NTY",
        "mb": 47,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 126,
        "name": {
            "en": "Geddon3",
            "ja": "デスマッチ3"
        },
        "description": {
            "en": "Turns all\npanels to\nswamp",
            "ja": "パネルのあるマスが\nすべてどくぬまに！"
        },
        "element": "null",
        "codes": "HQU",
        "mb": 62,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 37,
        "name": {
            "en": "ElemLeaf",
            "ja": "エレメントリーフ"
        },
        "description": {
            "en": "3-sq atk\nPowerful\non grass",
            "ja": "よこ3マスの攻撃\nくさむらの上だと\nパワーアップ！"
        },
        "element": "wood",
        "codes": "CDI",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 150,
        "name": {
            "en": "ColorPt",
            "ja": "カラーポイント"
        },
        "description": {
            "en": "+10 for\nnext chip\nattack",
            "ja": "自エリアをぎせいに\nしてつぎのチップの\n攻撃力を+10ずつ"
        },
        "element": "plus",
        "codes": "*",
        "mb": 25,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 38,
        "name": {
            "en": "ElemSand",
            "ja": "エレメントサンド"
        },
        "description": {
            "en": "3-sq atk\nPowerful\non pitfal",
            "ja": "よこ3マスの攻撃\nアリジゴクの上だと\nパワーアップ！"
        },
        "element": "null",
        "codes": "ALS*",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 129,
        "name": {
            "en": "Blinder",
            "ja": "ブラインド"
        },
        "description": {
            "en": "Blinds\nenemy w/\nlight",
            "ja": "きょうりょくな光で\nあいてをもうもく\nじょうたいにする！"
        },
        "element": "null",
        "codes": "*",
        "mb": 9,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 79,
        "name": {
            "en": "MokoRus1",
            "ja": "モコラッシュ1"
        },
        "description": {
            "en": "3 Molokos\ncharge\nthe enemy",
            "ja": "マルモコが3たい\nたて1れつになって\nとっしんしていく！"
        },
        "element": "null",
        "codes": "CIM",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 80,
        "name": {
            "en": "MokoRus2",
            "ja": "モコラッシュ2"
        },
        "description": {
            "en": "3 Molokos\ncharge\nthe enemy",
            "ja": "マルモコが3たい\nたて1れつになって\nとっしんしていく！"
        },
        "element": "null",
        "codes": "GKU",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 81,
        "name": {
            "en": "MokoRus3",
            "ja": "モコラッシュ3"
        },
        "description": {
            "en": "3 Molokos\ncharge\nthe enemy",
            "ja": "マルモコが3たい\nたて1れつになって\nとっしんしていく！"
        },
        "element": "null",
        "codes": "OTY",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 133,
        "name": {
            "en": "Invis",
            "ja": "インビジブル"
        },
        "description": {
            "en": "Invisible\nfor a\nwhile",
            "ja": "少しの間とうめいに\nなって ほとんどの\n攻撃にあたらない"
        },
        "element": "invisible",
        "codes": "*",
        "mb": 12,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 134,
        "name": {
            "en": "PopUp",
            "ja": "ユカシタ"
        },
        "description": {
            "en": "Attacks\nfrm under\nground",
            "ja": "地中にもぐり\n攻撃のときだけ\nすがたをあらわす"
        },
        "element": "invisible",
        "codes": "JPY*",
        "mb": 21,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 135,
        "name": {
            "en": "Barrier",
            "ja": "バリア"
        },
        "description": {
            "en": "Nullifies\n10 HP of\ndamage",
            "ja": "バリアをはり\n10HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "ADZ*",
        "mb": 7,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 136,
        "name": {
            "en": "Barr100",
            "ja": "バリア100"
        },
        "description": {
            "en": "Nullifies\n100 HP of\ndamage",
            "ja": "バリアをはり\n100HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "PQW",
        "mb": 27,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 137,
        "name": {
            "en": "Barr200",
            "ja": "バリア200"
        },
        "description": {
            "en": "Nullifies\n200 HP of\ndamage",
            "ja": "バリアをはり\n200HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "IOU",
        "mb": 47,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 130,
        "name": {
            "en": "NrthWind",
            "ja": "スーパーキタカゼ"
        },
        "description": {
            "en": "Wind blws\noff aura,\nbarriers",
            "ja": "すさまじいキタカゼ\nがバリアやオーラを\nふきとばしてしまう"
        },
        "element": "wind",
        "codes": "ENT*",
        "mb": 33,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 131,
        "name": {
            "en": "HolyPanl",
            "ja": "ホーリーパネル"
        },
        "description": {
            "en": "Creates a\nHolyPanl\nin front",
            "ja": "目の前のパネルを\nダメージはんげんの\nホーリーパネルに！"
        },
        "element": "null",
        "codes": "*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 138,
        "name": {
            "en": "AntiFire",
            "ja": "カキゲンキン"
        },
        "description": {
            "en": "Fire atk\ndamages\nyou",
            "ja": "てきにワナをはる\n炎の攻撃をだすと\n自分がダメージ！"
        },
        "element": "fire",
        "codes": "K",
        "mb": 58,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 139,
        "name": {
            "en": "AntiWatr",
            "ja": "ダイコウズイ"
        },
        "description": {
            "en": "Water atk\ndamages\nyou",
            "ja": "てきにワナをはる\n水の攻撃をだすと\n自分がダメージ！"
        },
        "element": "aqua",
        "codes": "D",
        "mb": 54,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 140,
        "name": {
            "en": "AntiElec",
            "ja": "ヒライシン"
        },
        "description": {
            "en": "Elec atk\ndamages\nyou",
            "ja": "てきにワナをはる\n電気の攻撃をだすと\n自分がダメージ！"
        },
        "element": "elec",
        "codes": "H",
        "mb": 59,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 141,
        "name": {
            "en": "AntiWood",
            "ja": "マヨイノモリ"
        },
        "description": {
            "en": "Wood atk\ndamages\nyou",
            "ja": "てきにワナをはる\n木の攻撃をだすと\n自分がダメージ！"
        },
        "element": "wood",
        "codes": "M",
        "mb": 55,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 144,
        "name": {
            "en": "AntiNavi",
            "ja": "ナビスカウト"
        },
        "description": {
            "en": "Takes the\nenemy's\nNavi away",
            "ja": "てきにワナをはる\nよびだしたナビを\nねがえらせる"
        },
        "element": "null",
        "codes": "JMT",
        "mb": 44,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 142,
        "name": {
            "en": "AntiDmg",
            "ja": "カワリミ"
        },
        "description": {
            "en": "Sets trap\nand throw\nstars",
            "ja": "てきにワナをはる\n攻撃にあたると\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "KMR",
        "mb": 31,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 143,
        "name": {
            "en": "AntiSwrd",
            "ja": "シラハドリ"
        },
        "description": {
            "en": "Retaliate\nfor sword\ndamage",
            "ja": "てきにワナをはる\nソード攻撃をうけ\nながしてはんげき！"
        },
        "element": "sword",
        "codes": "CIN*",
        "mb": 43,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 145,
        "name": {
            "en": "AntiRecv",
            "ja": "バッドメディスン"
        },
        "description": {
            "en": "Damages\nenemy in\nrecovery",
            "ja": "てきにワナをはる\nてきのリカバリーが\nぎゃくにダメージに"
        },
        "element": "null",
        "codes": "BDG*",
        "mb": 37,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 146,
        "name": {
            "en": "CopyDmg",
            "ja": "コピーダメージ"
        },
        "description": {
            "en": "Duplicate\ndamage to\n2nd enemy",
            "ja": "カーソルのあいてに\nほかのてきがうけた\nダメージをコピー！"
        },
        "element": "null",
        "codes": "*",
        "mb": 12,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 148,
        "name": {
            "en": "Atk+10",
            "ja": "アタック+10"
        },
        "description": {
            "en": "+10 for\nselected\natk chip",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+10できる"
        },
        "element": "plus",
        "codes": "*",
        "mb": 6,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 149,
        "name": {
            "en": "Navi+20",
            "ja": "ナビ+20"
        },
        "description": {
            "en": "+20 for\nselected\nNavi chip",
            "ja": "ナビチップの\nあとにえらぶと\n攻撃力を+20！"
        },
        "element": "plus",
        "codes": "*",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 1,
        "name": {
            "en": "RollAro1",
            "ja": "ロールアロー1"
        },
        "description": {
            "en": "RollArrow\ndestroys\nchips",
            "ja": "ロールアローを\n前方へはなつ！\nチップはかい攻撃！"
        },
        "element": "null",
        "codes": "AFW",
        "mb": 32,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 2,
        "name": {
            "en": "RollAro2",
            "ja": "ロールアロー2"
        },
        "description": {
            "en": "RollArrow\ndestroys\nchips",
            "ja": "ロールアローを\n前方へはなつ！\nチップはかい攻撃！"
        },
        "element": "null",
        "codes": "DRW",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 3,
        "name": {
            "en": "RollAro3",
            "ja": "ロールアロー3"
        },
        "description": {
            "en": "RollArrow\ndestroys\nchips",
            "ja": "ロールアローを\n前方へはなつ！\nチップはかい攻撃！"
        },
        "element": "null",
        "codes": "QYZ",
        "mb": 44,
        "version": null,
        "stars": 4,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 4,
        "name": {
            "en": "GutPnch1",
            "ja": "ガッツパンチ1"
        },
        "description": {
            "en": "Launches\nGutPunch\nahead",
            "ja": "目の前のマスに\nガッツパンチ！"
        },
        "element": "null",
        "codes": "BEN",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 5,
        "name": {
            "en": "GutPnch2",
            "ja": "ガッツパンチ2"
        },
        "description": {
            "en": "Launches\nGutStrgt\nahead",
            "ja": "目の前のマスに\nガッツストレート！"
        },
        "element": "null",
        "codes": "GPY",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 6,
        "name": {
            "en": "GutPnch3",
            "ja": "ガッツパンチ3"
        },
        "description": {
            "en": "Launches\nGutImpct\nahead",
            "ja": "目の前のマスに\nガッツインパクト！"
        },
        "element": "null",
        "codes": "MQT",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 7,
        "name": {
            "en": "PropBom1",
            "ja": "プロペラボム1"
        },
        "description": {
            "en": "Rushing\ncauses an\nexplosion",
            "ja": "前方へとんでいき\n画面はしにきえると\n大ばくはつをおこす"
        },
        "element": "null",
        "codes": "EGP*",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 8,
        "name": {
            "en": "PropBom2",
            "ja": "プロペラボム2"
        },
        "description": {
            "en": "Rushing\ncauses an\nexplosion",
            "ja": "前方へとんでいき\n画面はしにきえると\n大ばくはつをおこす"
        },
        "element": "null",
        "codes": "FVZ*",
        "mb": 26,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 9,
        "name": {
            "en": "PropBom3",
            "ja": "プロペラボム3"
        },
        "description": {
            "en": "Rushing\ncauses an\nexplosion",
            "ja": "前方へとんでいき\n画面はしにきえると\n大ばくはつをおこす"
        },
        "element": "null",
        "codes": "HJQ",
        "mb": 34,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 10,
        "name": {
            "en": "SeekBom1",
            "ja": "サーチボム1"
        },
        "description": {
            "en": "Throws a\nbomb at\nthe enemy",
            "ja": "てきをねらって\nとんでいくボムを\nなげつける！"
        },
        "element": "null",
        "codes": "BRS*",
        "mb": 25,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 11,
        "name": {
            "en": "SeekBom2",
            "ja": "サーチボム2"
        },
        "description": {
            "en": "Throws a\nbomb at\nthe enemy",
            "ja": "てきをねらって\nとんでいくボムを\nなげつける！"
        },
        "element": "null",
        "codes": "CIO",
        "mb": 35,
        "version": null,
        "stars": 3,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 12,
        "name": {
            "en": "SeekBom3",
            "ja": "サーチボム3"
        },
        "description": {
            "en": "Throws a\nbomb at\nthe enemy",
            "ja": "てきをねらって\nとんでいくボムを\nなげつける！"
        },
        "element": "null",
        "codes": "MUW",
        "mb": 45,
        "version": null,
        "stars": 4,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 13,
        "name": {
            "en": "Meteors1",
            "ja": "メテオレイン1"
        },
        "description": {
            "en": "Fires 5\nMeteors\nat enemy",
            "ja": "前方のちかいてきの\nいるマスにメテオを\n5発ふらせる！"
        },
        "element": "fire",
        "codes": "GLS*",
        "mb": 15,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 14,
        "name": {
            "en": "Meteors2",
            "ja": "メテオレイン2"
        },
        "description": {
            "en": "Fires 5\nMeteors\nat enemy",
            "ja": "前方のちかいてきの\nいるマスにメテオを\n5発ふらせる！"
        },
        "element": "fire",
        "codes": "MQT",
        "mb": 23,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 15,
        "name": {
            "en": "Meteors3",
            "ja": "メテオレイン3"
        },
        "description": {
            "en": "Fires 5\nMeteors\nat enemy",
            "ja": "前方のちかいてきの\nいるマスにメテオを\n5発ふらせる！"
        },
        "element": "fire",
        "codes": "CRZ",
        "mb": 31,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 16,
        "name": {
            "en": "Ligtnin1",
            "ja": "ライトニング1"
        },
        "description": {
            "en": "Thunder\nstrikes\nobstacles",
            "ja": "しょうがいぶつに\nらくらい！まわりの\nてきにもかんでん！"
        },
        "element": "elec",
        "codes": "LTW*",
        "mb": 33,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 17,
        "name": {
            "en": "Ligtnin2",
            "ja": "ライトニング2"
        },
        "description": {
            "en": "Thunder\nstrikes\nobstacles",
            "ja": "しょうがいぶつに\nらくらい！まわりの\nてきにもかんでん！"
        },
        "element": "elec",
        "codes": "AEV",
        "mb": 37,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 18,
        "name": {
            "en": "Ligtnin3",
            "ja": "ライトニング3"
        },
        "description": {
            "en": "Thunder\nstrikes\nobstacles",
            "ja": "しょうがいぶつに\nらくらい！まわりの\nてきにもかんでん！"
        },
        "element": "elec",
        "codes": "HJQ",
        "mb": 41,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 19,
        "name": {
            "en": "HawkCut1",
            "ja": "ハヤブサギリ1"
        },
        "description": {
            "en": "Cut twice\nonce wide\nonce long",
            "ja": "ワイドとロングに\nすばやく2回\nきりつける！"
        },
        "element": "sword",
        "codes": "HNO",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 20,
        "name": {
            "en": "HawkCut2",
            "ja": "ハヤブサギリ2"
        },
        "description": {
            "en": "Cut twice\nonce wide\nonce long",
            "ja": "ワイドとロングに\nすばやく2回\nきりつける！"
        },
        "element": "sword",
        "codes": "FSV",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 21,
        "name": {
            "en": "HawkCut3",
            "ja": "ハヤブサギリ3"
        },
        "description": {
            "en": "Cut twice\nonce wide\nonce long",
            "ja": "ワイドとロングに\nすばやく2回\nきりつける！"
        },
        "element": "sword",
        "codes": "INZ",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 22,
        "name": {
            "en": "NumbrBl1",
            "ja": "ナンバーボール1"
        },
        "description": {
            "en": "3-shot\nball atk\nreduce HP",
            "ja": "3れんしゃのボール\n攻撃力はそのときの\nHPの下2ケタ！"
        },
        "element": "null",
        "codes": "ELW",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 23,
        "name": {
            "en": "NumbrBl2",
            "ja": "ナンバーボール2"
        },
        "description": {
            "en": "4-shot\nball atk\nreduce HP",
            "ja": "4れんしゃのボール\n攻撃力はそのときの\nHPの下2ケタ！"
        },
        "element": "null",
        "codes": "AEP",
        "mb": 35,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 24,
        "name": {
            "en": "NumbrBl3",
            "ja": "ナンバーボール3"
        },
        "description": {
            "en": "5-shot\nball atk\nreduce HP",
            "ja": "5れんしゃのボール\n攻撃力はそのときの\nHPの下2ケタ！"
        },
        "element": "null",
        "codes": "LTY",
        "mb": 42,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 25,
        "name": {
            "en": "MetlGer1",
            "ja": "メタルギア1"
        },
        "description": {
            "en": "Gear\ncrushes\nenmy area",
            "ja": "前方のあいてエリア\n左はしのマスに\nはぐるまが発生！"
        },
        "element": "break",
        "codes": "AMP*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 26,
        "name": {
            "en": "MetlGer2",
            "ja": "メタルギア2"
        },
        "description": {
            "en": "Gear\ncrushes\nenmy area",
            "ja": "前方のあいてエリア\n左はしのマスに\nはぐるまが発生！"
        },
        "element": "break",
        "codes": "CEG*",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 27,
        "name": {
            "en": "MetlGer3",
            "ja": "メタルギア3"
        },
        "description": {
            "en": "Gear\ncrushes\nenmy area",
            "ja": "前方のあいてエリア\n左はしのマスに\nはぐるまが発生！"
        },
        "element": "break",
        "codes": "ILQ*",
        "mb": 36,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 28,
        "name": {
            "en": "PanlSht1",
            "ja": "パネルシュート1"
        },
        "description": {
            "en": "Lifts\npanel and\nthrows it",
            "ja": "目の前のパネルを\nうきあがらせて\n前方にとばして攻撃"
        },
        "element": "terrain",
        "codes": "AHS*",
        "mb": 19,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 29,
        "name": {
            "en": "PanlSht2",
            "ja": "パネルシュート2"
        },
        "description": {
            "en": "Lifts\npanel and\nthrows it",
            "ja": "前後のパネルを\nうきあがらせて\n前方にとばして攻撃"
        },
        "element": "terrain",
        "codes": "CGT*",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 30,
        "name": {
            "en": "PanlSht3",
            "ja": "パネルシュート3"
        },
        "description": {
            "en": "Lifts\npanel and\nthrows it",
            "ja": "上下左右のパネルを\nうきあがらせて\n前方にとばして攻撃"
        },
        "element": "terrain",
        "codes": "FJN*",
        "mb": 31,
        "version": null,
        "stars": 4,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 31,
        "name": {
            "en": "AquaUp1",
            "ja": "アクアアッパー1"
        },
        "description": {
            "en": "Raises\nAquaTowrs\nfrm crack",
            "ja": "てきのいる\nヒビわれたマスから\nアクアタワー発生！"
        },
        "element": "aqua",
        "codes": "BSZ",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 32,
        "name": {
            "en": "AquaUp2",
            "ja": "アクアアッパー2"
        },
        "description": {
            "en": "Raises\nAquaTowrs\nfrm crack",
            "ja": "てきのいる\nヒビわれたマスから\nアクアタワー発生！"
        },
        "element": "aqua",
        "codes": "IPU",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 33,
        "name": {
            "en": "AquaUp3",
            "ja": "アクアアッパー3"
        },
        "description": {
            "en": "Raises\nAquaTowrs\nfrm crack",
            "ja": "てきのいる\nヒビわれたマスから\nアクアタワー発生！"
        },
        "element": "aqua",
        "codes": "FKW",
        "mb": 34,
        "version": null,
        "stars": 4,
        "damage": 170,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 34,
        "name": {
            "en": "GreenWd1",
            "ja": "グリーンウッド1"
        },
        "description": {
            "en": "Raises\nWoodTowrs\nfrm grass",
            "ja": "てきのいる\nくさむらのマスに\nウッディタワー！"
        },
        "element": "wood",
        "codes": "GJY",
        "mb": 35,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 35,
        "name": {
            "en": "GreenWd2",
            "ja": "グリーンウッド2"
        },
        "description": {
            "en": "Raises\nWoodTowrs\nfrm grass",
            "ja": "てきのいる\nくさむらのマスに\nウッディタワー！"
        },
        "element": "wood",
        "codes": "DKP",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 36,
        "name": {
            "en": "GreenWd3",
            "ja": "グリーンウッド3"
        },
        "description": {
            "en": "Raises\nWoodTowrs\nfrm grass",
            "ja": "てきのいる\nくさむらのマスに\nウッディタワー！"
        },
        "element": "wood",
        "codes": "ENP",
        "mb": 45,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "dark",
        "index": 1,
        "name": {
            "en": "DrkCanon",
            "ja": "ダークキャノン"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        },
        "element": "null",
        "codes": "",
        "mb": null,
        "version": null,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 2,
        "name": {
            "en": "DrkSword",
            "ja": "ダークソード"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        },
        "element": "sword",
        "codes": "",
        "mb": null,
        "version": null,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 3,
        "name": {
            "en": "DarkBomb",
            "ja": "ダークボム"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        },
        "element": "null",
        "codes": "",
        "mb": null,
        "version": null,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 4,
        "name": {
            "en": "DrkVulcn",
            "ja": "ダークバルカン"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        },
        "element": "null",
        "codes": "",
        "mb": null,
        "version": null,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 5,
        "name": {
            "en": "DrkLance",
            "ja": "ダークランス"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        },
        "element": "null",
        "codes": "",
        "mb": null,
        "version": null,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 6,
        "name": {
            "en": "DrkSpred",
            "ja": "ダークスプレッド"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        },
        "element": "null",
        "codes": "",
        "mb": null,
        "version": null,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 7,
        "name": {
            "en": "DrkStage",
            "ja": "ダークステージ"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        },
        "element": "null",
        "codes": "",
        "mb": null,
        "version": null,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 8,
        "name": {
            "en": "DrkRecov",
            "ja": "ダークリカバリー"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        },
        "element": "recovery",
        "codes": "",
        "mb": null,
        "version": null,
        "damage": null,
        "class": "dark"
    },
    {
        "name": {
            "en": "",
            "ja": "ヨビ1"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        }
    },
    {
        "name": {
            "en": "",
            "ja": "ヨビ2"
        },
        "description": {
            "en": "DARKCHIP\nCREATED\nBY DESIRE",
            "ja": "オノレノヨクボウガ\nウミダシタアクマノ\nダークチップ・・・"
        }
    },
    {
        "name": {
            "en": "",
            "ja": "ヨビ3"
        },
        "description": {
            "en": "Treasure-\nCall1",
            "ja": "タカラヨウヨビ1"
        }
    },
    {
        "name": {
            "en": "",
            "ja": "ヨビ4"
        },
        "description": {
            "en": "Treasure-\nCall2",
            "ja": "タカラヨウヨビ2"
        }
    },
    {
        "name": {
            "en": "",
            "ja": "ヨビ5"
        },
        "description": {
            "en": "Treasure-\nCall3",
            "ja": "タカラヨウヨビ3"
        }
    },
    {
        "name": {
            "en": "",
            "ja": "ヨビ6"
        },
        "description": {
            "en": "Treasure-\nCall4",
            "ja": "タカラヨウヨビ4"
        }
    },
    {
        "section": "mega",
        "index": 10,
        "name": {
            "en": "LifeAura",
            "ja": "ドリームオーラ"
        },
        "description": {
            "en": "Repels\nall attck\nunder 200",
            "ja": "攻撃力が200より\nひくい攻撃を\nむこうかするオーラ"
        },
        "element": "null",
        "codes": "D",
        "mb": 70,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 14,
        "name": {
            "en": "Muramasa",
            "ja": "ムラマサブレード"
        },
        "description": {
            "en": "EvilChip!\nPower=\nHP lost",
            "ja": "あんこくチップ！\nへっているHP分が\n攻撃力になる"
        },
        "element": "sword",
        "codes": "M",
        "mb": 81,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 5,
        "name": {
            "en": "Guardian",
            "ja": "オジゾウサン"
        },
        "description": {
            "en": "Statue\nretaliate\nwhen hit",
            "ja": "目の前のマスに\nこわしてはいけない\nオジゾウサンをおく"
        },
        "element": "obstacle",
        "codes": "O",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 15,
        "name": {
            "en": "Anubis",
            "ja": "ポイズンアヌビス"
        },
        "description": {
            "en": "EvilChip!\nAnubis\npoisons",
            "ja": "あんこくチップ！\nどくを発生させる\nアヌビスぞうをおく"
        },
        "element": "obstacle",
        "codes": "A",
        "mb": 86,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 12,
        "name": {
            "en": "Atk+30",
            "ja": "アタック+30"
        },
        "description": {
            "en": "+30 for\nselected\natk chip",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+30できる"
        },
        "element": "plus",
        "codes": "*",
        "mb": 66,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 8,
        "name": {
            "en": "BugFix",
            "ja": "バグシュウセイ"
        },
        "description": {
            "en": "Repairs &\nremoves\nbugs",
            "ja": "ナビに発生している\nバグをしゅうせいし\nとりのぞく"
        },
        "element": "null",
        "codes": "B*",
        "mb": 62,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 13,
        "name": {
            "en": "DblPoint",
            "ja": "ダブルポイント"
        },
        "description": {
            "en": "+20 for\nnext chip\nattack",
            "ja": "自エリアをぎせいに\nしてつぎのチップの\n攻撃力を+20ずつ"
        },
        "element": "plus",
        "codes": "*",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 11,
        "name": {
            "en": "Snctuary",
            "ja": "サンクチュアリ"
        },
        "description": {
            "en": "Chng all\nown panel\nto holy",
            "ja": "自分のエリアの\nすべてのマスを\nホーリーパネルに！"
        },
        "element": "null",
        "codes": "S",
        "mb": 62,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 9,
        "name": {
            "en": "FullCust",
            "ja": "フルカスタム"
        },
        "description": {
            "en": "CustGauge\ninstantly\nrefills",
            "ja": "カスタムゲージが\nいっしゅんで\nマンタンになる！"
        },
        "element": "null",
        "codes": "*",
        "mb": 45,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 3,
        "name": {
            "en": "ShotStar",
            "ja": "リュウセイグン"
        },
        "description": {
            "en": "Drop many\nmeteor on\nenmy area",
            "ja": "あいてエリアに\nむすうのリュウセイ\nがふりそそぐ！"
        },
        "element": "fire",
        "codes": "R",
        "mb": 73,
        "version": null,
        "stars": 5,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 7,
        "name": {
            "en": "BugChain",
            "ja": "バグチェーン"
        },
        "description": {
            "en": "Fires\nbugs into\nenmy area",
            "ja": "自分に発生している\nバグをあいてにも\nうつしてしまう！"
        },
        "element": "null",
        "codes": "*",
        "mb": 59,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 6,
        "name": {
            "en": "Jealousy",
            "ja": "ジェラシー"
        },
        "description": {
            "en": "More chip\nmean more\ndamage",
            "ja": "チップをもつてきに\n枚数におうじた\nダメージをあたえる"
        },
        "element": "null",
        "codes": "J",
        "mb": 35,
        "version": null,
        "stars": 4,
        "damage": 80,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 16,
        "name": {
            "en": "ElemDark",
            "ja": "エレメントダーク"
        },
        "description": {
            "en": "EvilChip!\nPowerful\novr swamp",
            "ja": "あんこくチップ！\nどくぬまの上だと\nパワーアップ！"
        },
        "element": "null",
        "codes": "E",
        "mb": 38,
        "version": null,
        "stars": 4,
        "damage": 220,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 17,
        "name": {
            "en": "BlakWing",
            "ja": "ブラックウイング"
        },
        "description": {
            "en": "EvilChip!\nWings\ndescend",
            "ja": "あんこくチップ！\nてきエリアはしから\nくろいツバサ攻撃！"
        },
        "element": "null",
        "codes": "W",
        "mb": 58,
        "version": null,
        "stars": 4,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 4,
        "name": {
            "en": "GodHammr",
            "ja": "ゴッドハンマー"
        },
        "description": {
            "en": "Places a\nstone\nstatue",
            "ja": "てきみかたとわず\n攻撃するせきぞうを\n目の前のマスにおく"
        },
        "element": "obstacle",
        "codes": "G",
        "mb": 68,
        "version": null,
        "stars": 4,
        "damage": 250,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 18,
        "name": {
            "en": "DrkLine",
            "ja": "ダークライン"
        },
        "description": {
            "en": "Turns all\nrows into\nHoles",
            "ja": "自分のいるれつを\nすべてダークホール\nにしてしまう！"
        },
        "element": "null",
        "codes": "L*",
        "mb": 59,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 2,
        "name": {
            "en": "NeoVari",
            "ja": "ネオバリアブル"
        },
        "description": {
            "en": "A magical\nshifting\nsword",
            "ja": "へんげんじざいの\nテクニカルソード\nじょうきゅうへん"
        },
        "element": "sword",
        "codes": "N",
        "mb": 74,
        "version": null,
        "stars": 5,
        "damage": 240,
        "class": "mega"
    },
    {
        "section": "secret",
        "index": 38,
        "name": {
            "en": "Z Saver",
            "ja": "Zセイバー"
        },
        "description": {
            "en": "Repliroid\nswrd cuts\n3 times",
            "ja": "でんせつの あかい\nレプリロイドの\n3だんぎりソード"
        },
        "element": "sword",
        "codes": "Z",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "secret",
        "index": 37,
        "name": {
            "en": "GunSolEX",
            "ja": "ガンデルソルEX"
        },
        "description": {
            "en": "Fires a\nspread\nsunbeam",
            "ja": "さらにこうはんいに\nたいようこうせんを\nしょうしゃする！"
        },
        "element": "null",
        "codes": "G",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 1,
        "name": {
            "en": "SuprVulc",
            "ja": "スーパーバルカン"
        },
        "description": {
            "en": "12-shot\nvulcan\ncannon",
            "ja": "きょういの\n12れんしゃ\nバルカンほう！"
        },
        "element": "null",
        "codes": "V",
        "mb": 75,
        "version": null,
        "stars": 4,
        "damage": 10,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 19,
        "name": {
            "en": "Roll",
            "ja": "ロール"
        },
        "description": {
            "en": "Attcks an\nenmy,then\nheals you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "recovery",
        "codes": "R",
        "mb": 28,
        "version": "redsun",
        "stars": 4,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 20,
        "name": {
            "en": "RollSP",
            "ja": "ロールSP"
        },
        "description": {
            "en": "Attcks an\nenmy,then\nheals you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "recovery",
        "codes": "R",
        "mb": 60,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 21,
        "name": {
            "en": "RollDS",
            "ja": "ロールDS"
        },
        "description": {
            "en": "Attcks an\nenmy,then\nheals you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "recovery",
        "codes": "R",
        "mb": 60,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 22,
        "name": {
            "en": "GutsMan",
            "ja": "ガッツマン"
        },
        "description": {
            "en": "GutsHammr\ndestroys\nenmy area",
            "ja": "ガッツハンマー！\nあいてエリアに\nヒビとガレキ攻撃！"
        },
        "element": "terrain",
        "codes": "G",
        "mb": 32,
        "version": "redsun",
        "stars": 4,
        "damage": 80,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 23,
        "name": {
            "en": "GutsMnSP",
            "ja": "ガッツマンSP"
        },
        "description": {
            "en": "GutsHammr\ndestroys\nenmy area",
            "ja": "ガッツハンマー！\nあいてエリアに\nヒビとガレキ攻撃！"
        },
        "element": "terrain",
        "codes": "G",
        "mb": 68,
        "version": "redsun",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 24,
        "name": {
            "en": "GutsMnDS",
            "ja": "ガッツマンDS"
        },
        "description": {
            "en": "GutsHammr\ndestroys\nenmy area",
            "ja": "ガッツハンマー！\nあいてエリアに\nヒビとガレキ攻撃！"
        },
        "element": "terrain",
        "codes": "G",
        "mb": 68,
        "version": "redsun",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 25,
        "name": {
            "en": "WindMan",
            "ja": "ウインドマン"
        },
        "description": {
            "en": "Whirlwind\nthat spin\nacrss 3sq",
            "ja": "3マス四方に\nかいてんする\nたつまきを発生！"
        },
        "element": "wind",
        "codes": "W",
        "mb": 48,
        "version": "redsun",
        "stars": 4,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 26,
        "name": {
            "en": "WindMnSP",
            "ja": "ウインドマンSP"
        },
        "description": {
            "en": "Whirlwind\nthat spin\nacrss 3sq",
            "ja": "3マス四方に\nかいてんする\nたつまきを発生！"
        },
        "element": "wind",
        "codes": "W",
        "mb": 64,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 27,
        "name": {
            "en": "WindMnDS",
            "ja": "ウインドマンDS"
        },
        "description": {
            "en": "Whirlwind\nthat spin\nacrss 3sq",
            "ja": "3マス四方に\nかいてんする\nたつまきを発生！"
        },
        "element": "wind",
        "codes": "W",
        "mb": 64,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 28,
        "name": {
            "en": "SerchMan",
            "ja": "サーチマン"
        },
        "description": {
            "en": "Stop site\nand fire\n5 shots",
            "ja": "サイトをボタンで\nとめて 5れんしゃ\nのスコープガン！"
        },
        "element": "invisible",
        "codes": "S",
        "mb": 45,
        "version": "redsun",
        "stars": 4,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 29,
        "name": {
            "en": "SrchMnSP",
            "ja": "サーチマンSP"
        },
        "description": {
            "en": "Stop site\nand fire\n5 shots",
            "ja": "サイトをボタンで\nとめて 5れんしゃ\nのスコープガン！"
        },
        "element": "invisible",
        "codes": "S",
        "mb": 45,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 30,
        "name": {
            "en": "SrchMnDS",
            "ja": "サーチマンDS"
        },
        "description": {
            "en": "Stop site\nand fire\n5 shots",
            "ja": "サイトをボタンで\nとめて 5れんしゃ\nのスコープガン！"
        },
        "element": "invisible",
        "codes": "S",
        "mb": 70,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 31,
        "name": {
            "en": "FireMan",
            "ja": "ファイアマン"
        },
        "description": {
            "en": "Fire burn\nto front\nside",
            "ja": "前方のよこ1れつに\nかんつうする炎！\nファイアアーム！"
        },
        "element": "fire",
        "codes": "F",
        "mb": 35,
        "version": "redsun",
        "stars": 4,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 32,
        "name": {
            "en": "FireMnSP",
            "ja": "ファイアマンSP"
        },
        "description": {
            "en": "Fire burn\nto front\nside",
            "ja": "前方のよこ1れつに\nかんつうする炎！\nファイアアーム！"
        },
        "element": "fire",
        "codes": "F",
        "mb": 72,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 33,
        "name": {
            "en": "FireMnDS",
            "ja": "ファイアマンDS"
        },
        "description": {
            "en": "Fire burn\nto front\nside",
            "ja": "前方のよこ1れつに\nかんつうする炎！\nファイアアーム！"
        },
        "element": "fire",
        "codes": "F",
        "mb": 72,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 34,
        "name": {
            "en": "ThunMan",
            "ja": "サンダーマン"
        },
        "description": {
            "en": "Lightning\nstrikes\n3sq ahead",
            "ja": "3マス前方のたて\n1れつにらくらい！\nパネルごとこわす！"
        },
        "element": "elec",
        "codes": "T",
        "mb": 48,
        "version": "redsun",
        "stars": 4,
        "damage": 90,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 35,
        "name": {
            "en": "ThunMnSP",
            "ja": "サンダーマンSP"
        },
        "description": {
            "en": "Lightning\nstrikes\n3sq ahead",
            "ja": "3マス前方のたて\n1れつにらくらい！\nパネルごとこわす！"
        },
        "element": "elec",
        "codes": "T",
        "mb": 68,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 36,
        "name": {
            "en": "ThunMnDS",
            "ja": "サンダーマンDS"
        },
        "description": {
            "en": "Lightning\nstrikes\n3sq ahead",
            "ja": "3マス前方のたて\n1れつにらくらい！\nパネルごとこわす！"
        },
        "element": "elec",
        "codes": "T",
        "mb": 68,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 19,
        "name": {
            "en": "ProtoMan",
            "ja": "ブルース"
        },
        "description": {
            "en": "Rush up\nto enemy\nand slice",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "sword",
        "codes": "B",
        "mb": 54,
        "version": "bluemoon",
        "stars": 4,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 20,
        "name": {
            "en": "ProtoMSP",
            "ja": "ブルースSP"
        },
        "description": {
            "en": "Rush up\nto enemy\nand slice",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "sword",
        "codes": "B",
        "mb": 79,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 21,
        "name": {
            "en": "ProtoMDS",
            "ja": "ブルースDS"
        },
        "description": {
            "en": "Rush up\nto enemy\nand slice",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "sword",
        "codes": "B",
        "mb": 79,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 22,
        "name": {
            "en": "NumbrMan",
            "ja": "ナンバーマン"
        },
        "description": {
            "en": "Bomb 3\nahead!\nHits 9sq",
            "ja": "3マス前方にボム！\n攻撃力は出目しだい\n9マス分にばくはつ"
        },
        "element": "plus",
        "codes": "N",
        "mb": 33,
        "version": "bluemoon",
        "stars": 4,
        "damage": 30,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 23,
        "name": {
            "en": "NumbMnSP",
            "ja": "ナンバーマンSP"
        },
        "description": {
            "en": "Bomb 3\nahead!\nHits 9sq",
            "ja": "3マス前方にボム！\n攻撃力は出目しだい\n9マス分にばくはつ"
        },
        "element": "plus",
        "codes": "N",
        "mb": 66,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 24,
        "name": {
            "en": "NumbMnDS",
            "ja": "ナンバーマンDS"
        },
        "description": {
            "en": "Bomb 3\nahead!\nHits 9sq",
            "ja": "3マス前方にボム！\n攻撃力は出目しだい\n9マス分にばくはつ"
        },
        "element": "plus",
        "codes": "N",
        "mb": 66,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 25,
        "name": {
            "en": "MetalMan",
            "ja": "メタルマン"
        },
        "description": {
            "en": "Iron fist\ncrushes\n1sq ahead",
            "ja": "目の前の1マスに\nこうてつのコブシを\nふりおろす！"
        },
        "element": "break",
        "codes": "M",
        "mb": 52,
        "version": "bluemoon",
        "stars": 4,
        "damage": 160,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 26,
        "name": {
            "en": "MetlMnSP",
            "ja": "メタルマンSP"
        },
        "description": {
            "en": "Iron fist\ncrushes\n1sq ahead",
            "ja": "目の前の1マスに\nこうてつのコブシを\nふりおろす！"
        },
        "element": "break",
        "codes": "M",
        "mb": 76,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 27,
        "name": {
            "en": "MetlMnDS",
            "ja": "メタルマンDS"
        },
        "description": {
            "en": "Iron fist\ncrushes\n1sq ahead",
            "ja": "目の前の1マスに\nこうてつのコブシを\nふりおろす！"
        },
        "element": "break",
        "codes": "M",
        "mb": 76,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 28,
        "name": {
            "en": "JunkMan",
            "ja": "ジャンクマン"
        },
        "description": {
            "en": "Throw any\nobjects\non field",
            "ja": "フィールド上の\nぶったいをうかせて\nてきにぶつける！"
        },
        "element": "obstacle",
        "codes": "J",
        "mb": 80,
        "version": "bluemoon",
        "stars": 4,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 29,
        "name": {
            "en": "JunkMnSP",
            "ja": "ジャンクマンSP"
        },
        "description": {
            "en": "Throw any\nobjects\non field",
            "ja": "フィールド上の\nぶったいをうかせて\nてきにぶつける！"
        },
        "element": "obstacle",
        "codes": "J",
        "mb": 80,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 30,
        "name": {
            "en": "JunkMnDS",
            "ja": "ジャンクマンDS"
        },
        "description": {
            "en": "Throw any\nobjects\non field",
            "ja": "フィールド上の\nぶったいをうかせて\nてきにぶつける！"
        },
        "element": "obstacle",
        "codes": "J",
        "mb": 80,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 31,
        "name": {
            "en": "AquaMan",
            "ja": "アクアマン"
        },
        "description": {
            "en": "Water Gun\nsprays\n2sq ahead",
            "ja": "スイドウカンをおき\nその2マス前方まで\nほうすい攻撃！"
        },
        "element": "aqua",
        "codes": "A",
        "mb": 41,
        "version": "bluemoon",
        "stars": 4,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 32,
        "name": {
            "en": "AquaMnSP",
            "ja": "アクアマンSP"
        },
        "description": {
            "en": "Water Gun\nsprays\n2sq ahead",
            "ja": "スイドウカンをおき\nその2マス前方まで\nほうすい攻撃！"
        },
        "element": "aqua",
        "codes": "A",
        "mb": 62,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 33,
        "name": {
            "en": "AquaMnDS",
            "ja": "アクアマンDS"
        },
        "description": {
            "en": "Water Gun\nsprays\n2sq ahead",
            "ja": "スイドウカンをおき\nその2マス前方まで\nほうすい攻撃！"
        },
        "element": "aqua",
        "codes": "A",
        "mb": 62,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 34,
        "name": {
            "en": "WoodMan",
            "ja": "ウッドマン"
        },
        "description": {
            "en": "WoodTowr\npierce to\nenmy area",
            "ja": "あいてエリアないに\nランダムにつきだす\nウッディタワー！"
        },
        "element": "wood",
        "codes": "W",
        "mb": 50,
        "version": "bluemoon",
        "stars": 4,
        "damage": 130,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 35,
        "name": {
            "en": "WoodMnSP",
            "ja": "ウッドマンSP"
        },
        "description": {
            "en": "WoodTowr\npierce to\nenmy area",
            "ja": "あいてエリアないに\nランダムにつきだす\nウッディタワー！"
        },
        "element": "wood",
        "codes": "W",
        "mb": 76,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 36,
        "name": {
            "en": "WoodMnDS",
            "ja": "ウッドマンDS"
        },
        "description": {
            "en": "WoodTowr\npierce in\nenmy area",
            "ja": "あいてエリアないに\nランダムにつきだす\nウッディタワー！"
        },
        "element": "wood",
        "codes": "W",
        "mb": 76,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 37,
        "name": {
            "en": "TopMan",
            "ja": "タップマン"
        },
        "description": {
            "en": "Attck hit\n3 panels\nahead",
            "ja": "3マス前方にななめ\n四方からベーゴマと\nグリグリタップ攻撃"
        },
        "element": "break",
        "codes": "T",
        "mb": 54,
        "version": null,
        "stars": 4,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 38,
        "name": {
            "en": "TopMnSP",
            "ja": "タップマンSP"
        },
        "description": {
            "en": "Attck hit\n3 panels\nahead",
            "ja": "3マス前方にななめ\n四方からベーゴマと\nグリグリタップ攻撃"
        },
        "element": "break",
        "codes": "T",
        "mb": 71,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 39,
        "name": {
            "en": "TopMnDS",
            "ja": "タップマンDS"
        },
        "description": {
            "en": "Attck hit\n3 panels\nahead",
            "ja": "3マス前方にななめ\n四方からベーゴマと\nグリグリタップ攻撃"
        },
        "element": "break",
        "codes": "T",
        "mb": 71,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 49,
        "name": {
            "en": "ShadeMan",
            "ja": "シェードマン"
        },
        "description": {
            "en": "CrshNoise\nattck all\ndirection",
            "ja": "ほうしゃじょうに\nちょうおんぱ攻撃\nクラッシュノイズ！"
        },
        "element": "null",
        "codes": "X",
        "mb": 73,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 50,
        "name": {
            "en": "ShadMnSP",
            "ja": "シェードマンSP"
        },
        "description": {
            "en": "CrshNoise\nattck all\ndirection",
            "ja": "ほうしゃじょうに\nちょうおんぱ攻撃\nクラッシュノイズ！"
        },
        "element": "null",
        "codes": "X",
        "mb": 88,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 51,
        "name": {
            "en": "ShadMnDS",
            "ja": "シェードマンDS"
        },
        "description": {
            "en": "CrshNoise\nattck all\ndirection",
            "ja": "ほうしゃじょうに\nちょうおんぱ攻撃\nクラッシュノイズ！"
        },
        "element": "null",
        "codes": "X",
        "mb": 88,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 40,
        "name": {
            "en": "BurnMan",
            "ja": "バーナーマン"
        },
        "description": {
            "en": "3-direct\nburnr fry\n2 ahead!",
            "ja": "2マス前方めがけて\n3方からバーナーで\nしゅうちゅう攻撃"
        },
        "element": "fire",
        "codes": "B",
        "mb": 46,
        "version": null,
        "stars": 4,
        "damage": 60,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 41,
        "name": {
            "en": "BurnMnSP",
            "ja": "バーナーマンSP"
        },
        "description": {
            "en": "3-direct\nburnr fry\n2 ahead!",
            "ja": "2マス前方めがけて\n3方からバーナーで\nしゅうちゅう攻撃"
        },
        "element": "fire",
        "codes": "B",
        "mb": 69,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 42,
        "name": {
            "en": "BurnMnDS",
            "ja": "バーナーマンDS"
        },
        "description": {
            "en": "3-direct\nburnr fry\n2 ahead!",
            "ja": "2マス前方めがけて\n3方からバーナーで\nしゅうちゅう攻撃"
        },
        "element": "fire",
        "codes": "B",
        "mb": 69,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 43,
        "name": {
            "en": "ColdMan",
            "ja": "コールドマン"
        },
        "description": {
            "en": "Ices over\nall and\nslides!",
            "ja": "フィールド上のもの\nをこおりつかせ\nおしてすべらせる！"
        },
        "element": "aqua",
        "codes": "C",
        "mb": 53,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 44,
        "name": {
            "en": "ColdMnSP",
            "ja": "コールドマンSP"
        },
        "description": {
            "en": "Ices over\nall and\nslides!",
            "ja": "フィールド上のもの\nをこおりつかせ\nおしてすべらせる！"
        },
        "element": "aqua",
        "codes": "C",
        "mb": 72,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 45,
        "name": {
            "en": "ColdMnDS",
            "ja": "コールドマンDS"
        },
        "description": {
            "en": "Ices over\nall and\nslides!",
            "ja": "フィールド上のもの\nをこおりつかせ\nおしてすべらせる！"
        },
        "element": "aqua",
        "codes": "C",
        "mb": 72,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 46,
        "name": {
            "en": "SparkMan",
            "ja": "スパークマン"
        },
        "description": {
            "en": "SparkWave\nblinds\nenemy!",
            "ja": "前方すべてに\nスパークウェーブ！\nあいてをもうもくに"
        },
        "element": "elec",
        "codes": "S",
        "mb": 55,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 47,
        "name": {
            "en": "SprkMnSP",
            "ja": "スパークマンSP"
        },
        "description": {
            "en": "SparkWave\nblinds\nenemy!",
            "ja": "前方すべてに\nスパークウェーブ！\nあいてをもうもくに"
        },
        "element": "elec",
        "codes": "S",
        "mb": 77,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 48,
        "name": {
            "en": "SprkMnDS",
            "ja": "スパークマンDS"
        },
        "description": {
            "en": "SparkWave\nblinds\nenemy!",
            "ja": "前方すべてに\nスパークウェーブ！\nあいてをもうもくに"
        },
        "element": "elec",
        "codes": "S",
        "mb": 77,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 52,
        "name": {
            "en": "LaserMan",
            "ja": "レーザーマン"
        },
        "description": {
            "en": "A laser\npierces\n1 thru!",
            "ja": "よこ1れつかんつう\nするパワーダウン\nレーザー！"
        },
        "element": "null",
        "codes": "L",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 53,
        "name": {
            "en": "LasrMnSP",
            "ja": "レーザーマンSP"
        },
        "description": {
            "en": "A laser\npierces\n1 thru!",
            "ja": "よこ1れつかんつう\nするパワーダウン\nレーザー！"
        },
        "element": "null",
        "codes": "L",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 54,
        "name": {
            "en": "LasrMnDS",
            "ja": "レーザーマンDS"
        },
        "description": {
            "en": "A laser\npierces\n1 thru!",
            "ja": "よこ1れつかんつう\nするパワーダウン\nレーザー！"
        },
        "element": "null",
        "codes": "L",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 55,
        "name": {
            "en": "KendoMan",
            "ja": "ケンドーマン"
        },
        "description": {
            "en": "Attck hit\nan enemy\nin front",
            "ja": "前方のてきに\nつっこみ 前後から\nケンドー3だん攻撃"
        },
        "element": "null",
        "codes": "K",
        "mb": 45,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 56,
        "name": {
            "en": "KendMnSP",
            "ja": "ケンドーマンSP"
        },
        "description": {
            "en": "Attck hit\nan enemy\nin front",
            "ja": "前方のてきに\nつっこみ 前後から\nケンドー3だん攻撃"
        },
        "element": "null",
        "codes": "K",
        "mb": 75,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 57,
        "name": {
            "en": "KendMnDS",
            "ja": "ケンドーマンDS"
        },
        "description": {
            "en": "Attck hit\nan enemy\nin front",
            "ja": "前方のてきに\nつっこみ 前後から\nケンドー3だん攻撃"
        },
        "element": "null",
        "codes": "K",
        "mb": 75,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 58,
        "name": {
            "en": "VideoMan",
            "ja": "ビデオマン"
        },
        "description": {
            "en": "Attack\ntape slam\n2.5 in",
            "ja": "2マスはん前方に\nテープのしんが！\nまきこみテープ攻撃"
        },
        "element": "null",
        "codes": "V",
        "mb": 44,
        "version": null,
        "stars": 4,
        "damage": 25,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 59,
        "name": {
            "en": "VideMnSP",
            "ja": "ビデオマンSP"
        },
        "description": {
            "en": "Attack\ntape slam\n2.5 in",
            "ja": "2マスはん前方に\nテープのしんが！\nまきこみテープ攻撃"
        },
        "element": "null",
        "codes": "V",
        "mb": 67,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 60,
        "name": {
            "en": "VideMnDS",
            "ja": "ビデオマンDS"
        },
        "description": {
            "en": "Attack\ntape slam\n2.5 in",
            "ja": "2マスはん前方に\nテープのしんが！\nまきこみテープ攻撃"
        },
        "element": "null",
        "codes": "V",
        "mb": 67,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "name": {
            "en": "Marking",
            "ja": "マーキング"
        },
        "description": {
            "en": "Chase the\nenemy and\nattack!",
            "ja": "ねらったあいてに\nピッタリはりついて\n攻撃する!"
        }
    },
    {
        "name": {
            "en": "CannMode",
            "ja": "キャノンモード"
        },
        "description": {
            "en": "Briefly\nfire many\nCannons",
            "ja": "しばらくのあいだ\nキャノンを\nうちまくる!"
        }
    },
    {
        "name": {
            "en": "CannBall",
            "ja": "ホウガンモード"
        },
        "description": {
            "en": "Briefly\nthrw many\nCannBalls",
            "ja": "しばらくのあいだ\nホウガンを\nなげまくる!"
        }
    },
    {
        "name": {
            "en": "SwrdMode",
            "ja": "ソードモード"
        },
        "description": {
            "en": "Briefly\nslsh many\nLongSwrds",
            "ja": "しばらくのあいだ\nロングソードで\nきりつけまくる!"
        }
    },
    {
        "name": {
            "en": "FirePlus",
            "ja": "ファイアプラス"
        },
        "description": {
            "en": "Temporary\nFire chip\ndmg +40",
            "ja": "いっていじかん\n炎属性チップの\n攻撃力が+40"
        }
    },
    {
        "name": {
            "en": "ThunPlus",
            "ja": "サンダープラス"
        },
        "description": {
            "en": "Temporary\nElec chip\ndmg +40",
            "ja": "いっていじかん\n電気属性チップの\n攻撃力が+40"
        }
    },
    {
        "name": {
            "en": "AquaPowr",
            "ja": "アクアパワー"
        },
        "description": {
            "en": "Temporary\nAqua chip\ndmg ×2!",
            "ja": "いっていじかん\n水属性チップの\n攻撃力が2ばい!"
        }
    },
    {
        "name": {
            "en": "WoodPowr",
            "ja": "ウッドパワー"
        },
        "description": {
            "en": "Temporary\nWood chip\ndmg ×2!",
            "ja": "いっていじかん\n木属性チップの\n攻撃力が2ばい!"
        }
    },
    {
        "name": {
            "en": "BlakWeap",
            "ja": "ブラックウエポン"
        },
        "description": {
            "en": "Power up\nBuster w/\nown HP",
            "ja": "みずからのHPを\n攻撃力にかえて\nバスターをきょうか"
        }
    },
    {
        "name": {
            "en": "FinalGun",
            "ja": "ファイナルガン"
        },
        "description": {
            "en": "Charge up\nultimate\nattack!",
            "ja": "すべてのパワーを\nチャージしてはなつ\nきゅうきょく攻撃!"
        }
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "section": "giga",
        "index": 3,
        "name": {
            "en": "Bass",
            "ja": "フォルテ"
        },
        "description": {
            "en": "Buster\nrake half\nenmy area",
            "ja": "バトルフィールドの\n右はんぶんにはなつ\nフォルテバスター！"
        },
        "element": "null",
        "codes": "X",
        "mb": 95,
        "version": "redsun",
        "stars": 5,
        "damage": 60,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 5,
        "name": {
            "en": "DeltaRay",
            "ja": "デルタレイエッジ"
        },
        "description": {
            "en": "A Button\npower up\nby 3 swrd",
            "ja": "きりつけるときに\nAボタンでさいこう\n3だんのソード攻撃"
        },
        "element": "sword",
        "codes": "Z",
        "mb": 82,
        "version": "bluemoon",
        "stars": 4,
        "damage": 260,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 4,
        "name": {
            "en": "BugCurse",
            "ja": "カースオブバグ"
        },
        "description": {
            "en": "EvilChip!\nMake enmy\nbuggy!",
            "ja": "あんこくチップ！\nてきのナビをひどい\nバグじょうたいに！"
        },
        "element": "null",
        "codes": "CS",
        "mb": 73,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 1,
        "name": {
            "en": "RedSun",
            "ja": "メテオレッドサン"
        },
        "description": {
            "en": "A RedSun\nbombards\n3 ahead",
            "ja": "3マス前方めがけて\nレッドサンのメテオ\n攻撃がふりそそぐ！"
        },
        "element": "null",
        "codes": "R",
        "mb": 90,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 2,
        "name": {
            "en": "SignlRed",
            "ja": "シグナルレッド"
        },
        "description": {
            "en": "Enmy chip\nis no use\nwhile red",
            "ja": "あかいあいだは\nあいてがチップを\nつかえなくなる！"
        },
        "element": "obstacle",
        "codes": "S",
        "mb": 61,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 3,
        "name": {
            "en": "BassAnly",
            "ja": "フォルテアナザー"
        },
        "description": {
            "en": "A ring\nthat hits\n4 times",
            "ja": "いちどだけまがる\nリングを4発\nなげつける！"
        },
        "element": "null",
        "codes": "X",
        "mb": 95,
        "version": "bluemoon",
        "stars": 5,
        "damage": 160,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 2,
        "name": {
            "en": "HolyDrem",
            "ja": "ホーリードリーム"
        },
        "description": {
            "en": "Holy shot\nsucks in\nHolyPanl!",
            "ja": "ホーリーパネルを\nすいこんで前方へ\nホーリーショット！"
        },
        "element": "null",
        "codes": "H",
        "mb": 92,
        "version": "redsun",
        "stars": 5,
        "damage": 50,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 5,
        "name": {
            "en": "BlakBarr",
            "ja": "ブラックバリア"
        },
        "description": {
            "en": "A dark\nbarrier\nregenrate",
            "ja": "やぶれてもふっかつ\nするやみのバリア！"
        },
        "element": "null",
        "codes": "A",
        "mb": 87,
        "version": "redsun",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 1,
        "name": {
            "en": "BlueMoon",
            "ja": "ブルームーンレイ"
        },
        "description": {
            "en": "Blue moon\ndrains\n3 ahead",
            "ja": "3マス前方めがけて\nブルームーンが力を\nうばう光をはなつ！"
        },
        "element": "null",
        "codes": "B",
        "mb": 90,
        "version": "bluemoon",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 4,
        "name": {
            "en": "BugCharg",
            "ja": "バグチャージ"
        },
        "description": {
            "en": "EvilChip!\nGets powr\nwith turn",
            "ja": "あんこくチップ！\nターンがすすむほど\nつよくなる！"
        },
        "element": "null",
        "codes": "C",
        "mb": 77,
        "version": "redsun",
        "stars": 5,
        "damage": 80,
        "class": "giga"
    },
    {
        "section": "secret",
        "index": 40,
        "name": {
            "en": "Duo",
            "ja": "デューオ"
        },
        "description": {
            "en": "MetrKnukl\nof justic\nrain down",
            "ja": "むすうにふりそそぐ\nせいぎのコブシ\nメテオナックル！"
        },
        "element": "null",
        "codes": "D",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "giga"
    },
    {
        "section": "secret",
        "index": 39,
        "name": {
            "en": "PrixPowr",
            "ja": "グランプリパワー"
        },
        "description": {
            "en": "GrandPrix\n3 Navis\natk tgthr",
            "ja": "グランプリをとった\n3体のナビたちの\nゆめのきょうえん！"
        },
        "element": "null",
        "codes": "G",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "mega"
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "section": "pa",
        "index": 30,
        "name": {
            "en": "DarkNeo",
            "ja": "ダークメシアネオ"
        },
        "description": {
            "en": "Fuses the\npowr into\ndarkness!",
            "ja": "やみにおちた\nきょうしゃたちの\nがったいわざ！"
        },
        "pa": [
            [
                {
                    "id": 216,
                    "variant": 1
                },
                {
                    "id": 211,
                    "variant": 0
                },
                {
                    "id": 301,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 216,
                    "variant": 1
                },
                {
                    "id": 211,
                    "variant": 0
                },
                {
                    "id": 306,
                    "variant": 0
                }
            ]
        ],
        "damage": 250
    },
    {
        "section": "pa",
        "index": 5,
        "name": {
            "en": "HeatSprd",
            "ja": "ヒートスプレッド"
        },
        "description": {
            "en": "Explosion\nby Wide\nattack",
            "ja": "まわり1マスに\nばくえんがひろがる\nこうはんい攻撃！"
        },
        "pa": [
            [
                {
                    "id": 19,
                    "variant": 0
                },
                {
                    "id": 19,
                    "variant": 1
                },
                {
                    "id": 19,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 20,
                    "variant": 0
                },
                {
                    "id": 20,
                    "variant": 1
                },
                {
                    "id": 20,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 21,
                    "variant": 0
                },
                {
                    "id": 21,
                    "variant": 1
                },
                {
                    "id": 21,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 19,
                    "variant": 2
                },
                {
                    "id": 20,
                    "variant": 1
                },
                {
                    "id": 21,
                    "variant": 0
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 6,
        "name": {
            "en": "BubSprd",
            "ja": "バブルスプレッド"
        },
        "description": {
            "en": "Bubbles\nby Wide\nattack",
            "ja": "まわり1マスに\nあわがひろがる\nこうはんい攻撃！"
        },
        "pa": [
            [
                {
                    "id": 22,
                    "variant": 0
                },
                {
                    "id": 22,
                    "variant": 1
                },
                {
                    "id": 22,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 23,
                    "variant": 0
                },
                {
                    "id": 23,
                    "variant": 1
                },
                {
                    "id": 23,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 24,
                    "variant": 0
                },
                {
                    "id": 24,
                    "variant": 1
                },
                {
                    "id": 24,
                    "variant": 2
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 1,
        "name": {
            "en": "GigaCan1",
            "ja": "ギガキャノン1"
        },
        "description": {
            "en": "A cannon\ndriven by\nGigaPower",
            "ja": "ギガパワーではなつ\nきょうりょくな\nキャノン！"
        },
        "pa": [
            [
                {
                    "id": 1,
                    "variant": 0
                },
                {
                    "id": 1,
                    "variant": 1
                },
                {
                    "id": 1,
                    "variant": 2
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 2,
        "name": {
            "en": "GigaCan2",
            "ja": "ギガキャノン2"
        },
        "description": {
            "en": "A cannon\ndriven by\nGigaPower",
            "ja": "ギガパワーではなつ\nきょうりょくな\nキャノン！"
        },
        "pa": [
            [
                {
                    "id": 2,
                    "variant": 0
                },
                {
                    "id": 2,
                    "variant": 1
                },
                {
                    "id": 2,
                    "variant": 2
                }
            ]
        ],
        "damage": 400
    },
    {
        "section": "pa",
        "index": 3,
        "name": {
            "en": "GigaCan3",
            "ja": "ギガキャノン3"
        },
        "description": {
            "en": "A cannon\ndriven by\nGigaPower",
            "ja": "ギガパワーではなつ\nきょうりょくな\nキャノン！"
        },
        "pa": [
            [
                {
                    "id": 3,
                    "variant": 0
                },
                {
                    "id": 3,
                    "variant": 1
                },
                {
                    "id": 3,
                    "variant": 2
                }
            ]
        ],
        "damage": 500
    },
    {
        "section": "pa",
        "index": 7,
        "name": {
            "en": "SuprSpr1",
            "ja": "スーパーワイド1"
        },
        "description": {
            "en": "A 3-hit\nwide shot",
            "ja": "3れんしゃの\nワイドショット！\nてきをかんつうする"
        },
        "pa": [
            [
                {
                    "id": 9,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 1
                },
                {
                    "id": 9,
                    "variant": 2
                }
            ]
        ],
        "damage": 60
    },
    {
        "section": "pa",
        "index": 8,
        "name": {
            "en": "SuprSpr2",
            "ja": "スーパーワイド2"
        },
        "description": {
            "en": "A 3-hit\nwide shot",
            "ja": "3れんしゃの\nワイドショット！\nてきをかんつうする"
        },
        "pa": [
            [
                {
                    "id": 10,
                    "variant": 0
                },
                {
                    "id": 10,
                    "variant": 1
                },
                {
                    "id": 10,
                    "variant": 2
                }
            ]
        ],
        "damage": 80
    },
    {
        "section": "pa",
        "index": 9,
        "name": {
            "en": "SuprSpr3",
            "ja": "スーパーワイド3"
        },
        "description": {
            "en": "A 3-hit\nwide shot",
            "ja": "3れんしゃの\nワイドショット！\nてきをかんつうする"
        },
        "pa": [
            [
                {
                    "id": 11,
                    "variant": 0
                },
                {
                    "id": 11,
                    "variant": 1
                },
                {
                    "id": 11,
                    "variant": 2
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 10,
        "name": {
            "en": "FlmCros1",
            "ja": "フレイムクロス1"
        },
        "description": {
            "en": "The burn-\ning flame\nin cross!",
            "ja": "十字にひろがる\nじごくのごうか！"
        },
        "pa": [
            [
                {
                    "id": 12,
                    "variant": 0
                },
                {
                    "id": 12,
                    "variant": 1
                },
                {
                    "id": 12,
                    "variant": 2
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 11,
        "name": {
            "en": "FlmCros2",
            "ja": "フレイムクロス2"
        },
        "description": {
            "en": "The burn-\ning flame\nin cross!",
            "ja": "十字にひろがる\nじごくのごうか！"
        },
        "pa": [
            [
                {
                    "id": 13,
                    "variant": 0
                },
                {
                    "id": 13,
                    "variant": 1
                },
                {
                    "id": 13,
                    "variant": 2
                }
            ]
        ],
        "damage": 400
    },
    {
        "section": "pa",
        "index": 12,
        "name": {
            "en": "FlmCros3",
            "ja": "フレイムクロス3"
        },
        "description": {
            "en": "The burn-\ning flame\nin cross!",
            "ja": "十字にひろがる\nじごくのごうか！"
        },
        "pa": [
            [
                {
                    "id": 14,
                    "variant": 0
                },
                {
                    "id": 14,
                    "variant": 1
                },
                {
                    "id": 14,
                    "variant": 2
                }
            ]
        ],
        "damage": 500
    },
    {
        "section": "pa",
        "index": 22,
        "name": {
            "en": "PitRng1",
            "ja": "ヘルブーメラン1"
        },
        "description": {
            "en": "3 boome-\nrang atk\nenemies",
            "ja": "3本のブーメランが\nれんぞくであいてに\nおそいかかる！"
        },
        "pa": [
            [
                {
                    "id": 75,
                    "variant": 0
                },
                {
                    "id": 75,
                    "variant": 1
                },
                {
                    "id": 75,
                    "variant": 2
                }
            ]
        ],
        "damage": 200
    },
    {
        "section": "pa",
        "index": 23,
        "name": {
            "en": "PitRng2",
            "ja": "ヘルブーメラン2"
        },
        "description": {
            "en": "3 boome-\nrang atk\nenemies",
            "ja": "3本のブーメランが\nれんぞくであいてに\nおそいかかる！"
        },
        "pa": [
            [
                {
                    "id": 76,
                    "variant": 0
                },
                {
                    "id": 76,
                    "variant": 1
                },
                {
                    "id": 76,
                    "variant": 2
                }
            ]
        ],
        "damage": 250
    },
    {
        "section": "pa",
        "index": 24,
        "name": {
            "en": "PitRng3",
            "ja": "ヘルブーメラン3"
        },
        "description": {
            "en": "3 boome-\nrang atk\nenemies",
            "ja": "3本のブーメランが\nれんぞくであいてに\nおそいかかる！"
        },
        "pa": [
            [
                {
                    "id": 77,
                    "variant": 0
                },
                {
                    "id": 77,
                    "variant": 1
                },
                {
                    "id": 77,
                    "variant": 2
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 13,
        "name": {
            "en": "BstFang1",
            "ja": "マッドファング1"
        },
        "description": {
            "en": "Numerous\nFangs are\ncontinued",
            "ja": "自分の上下のれつに\nむすうのキバが\nつらなりすすむ！"
        },
        "pa": [
            [
                {
                    "id": 69,
                    "variant": 0
                },
                {
                    "id": 69,
                    "variant": 1
                },
                {
                    "id": 69,
                    "variant": 2
                }
            ]
        ],
        "damage": 50
    },
    {
        "section": "pa",
        "index": 14,
        "name": {
            "en": "BstFang2",
            "ja": "マッドファング2"
        },
        "description": {
            "en": "Numerous\nFangs are\ncontinued",
            "ja": "自分の上下のれつに\nむすうのキバが\nつらなりすすむ！"
        },
        "pa": [
            [
                {
                    "id": 70,
                    "variant": 0
                },
                {
                    "id": 70,
                    "variant": 1
                },
                {
                    "id": 70,
                    "variant": 2
                }
            ]
        ],
        "damage": 60
    },
    {
        "section": "pa",
        "index": 15,
        "name": {
            "en": "BstFang3",
            "ja": "マッドファング3"
        },
        "description": {
            "en": "Numerous\nFangs are\ncontinued",
            "ja": "自分の上下のれつに\nむすうのキバが\nつらなりすすむ！"
        },
        "pa": [
            [
                {
                    "id": 71,
                    "variant": 0
                },
                {
                    "id": 71,
                    "variant": 1
                },
                {
                    "id": 71,
                    "variant": 2
                }
            ]
        ],
        "damage": 70
    },
    {
        "section": "pa",
        "index": 4,
        "name": {
            "en": "PitHoky1",
            "ja": "ジゴクホッケー1"
        },
        "description": {
            "en": "The rico-\ncheting\nHockey",
            "ja": "はんしゃしつづける\nきょうふのホッケー"
        },
        "pa": [
            [
                {
                    "id": 63,
                    "variant": 0
                },
                {
                    "id": 63,
                    "variant": 1
                },
                {
                    "id": 63,
                    "variant": 2
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 20,
        "name": {
            "en": "PitHoky2",
            "ja": "ジゴクホッケー2"
        },
        "description": {
            "en": "The rico-\ncheting\nHockey",
            "ja": "はんしゃしつづける\nきょうふのホッケー"
        },
        "pa": [
            [
                {
                    "id": 64,
                    "variant": 0
                },
                {
                    "id": 64,
                    "variant": 1
                },
                {
                    "id": 64,
                    "variant": 2
                }
            ]
        ],
        "damage": 150
    },
    {
        "section": "pa",
        "index": 21,
        "name": {
            "en": "PitHoky3",
            "ja": "ジゴクホッケー3"
        },
        "description": {
            "en": "The rico-\ncheting\nHockey",
            "ja": "はんしゃしつづける\nきょうふのホッケー"
        },
        "pa": [
            [
                {
                    "id": 65,
                    "variant": 0
                },
                {
                    "id": 65,
                    "variant": 1
                },
                {
                    "id": 65,
                    "variant": 2
                }
            ]
        ],
        "damage": 200
    },
    {
        "section": "pa",
        "index": 16,
        "name": {
            "en": "MagShok1",
            "ja": "マグショック1"
        },
        "description": {
            "en": "Powerful\nmagnet\nattack!",
            "ja": "つよいじりょくで\n前方のてきすべてを\nすいよせて攻撃！"
        },
        "pa": [
            [
                {
                    "id": 35,
                    "variant": 0
                },
                {
                    "id": 35,
                    "variant": 1
                },
                {
                    "id": 35,
                    "variant": 2
                }
            ]
        ],
        "damage": 200
    },
    {
        "section": "pa",
        "index": 17,
        "name": {
            "en": "MagShok2",
            "ja": "マグショック2"
        },
        "description": {
            "en": "Powerful\nmagnet\nattack!",
            "ja": "つよいじりょくで\n前方のてきすべてを\nすいよせて攻撃！"
        },
        "pa": [
            [
                {
                    "id": 36,
                    "variant": 0
                },
                {
                    "id": 36,
                    "variant": 1
                },
                {
                    "id": 36,
                    "variant": 2
                }
            ]
        ],
        "damage": 250
    },
    {
        "section": "pa",
        "index": 18,
        "name": {
            "en": "MagShok3",
            "ja": "マグショック3"
        },
        "description": {
            "en": "Powerful\nmagnet\nattack!",
            "ja": "つよいじりょくで\n前方のてきすべてを\nすいよせて攻撃！"
        },
        "pa": [
            [
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 37,
                    "variant": 1
                },
                {
                    "id": 37,
                    "variant": 2
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 25,
        "name": {
            "en": "LifeSrd",
            "ja": "ドリームソード"
        },
        "description": {
            "en": "Big sword\n2 long\n3 wide!",
            "ja": "よこ2たて3の\nきょだいソードで\nてきをぶったぎる！"
        },
        "pa": [
            [
                {
                    "id": 48,
                    "variant": 0
                },
                {
                    "id": 49,
                    "variant": 0
                },
                {
                    "id": 50,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 48,
                    "variant": 1
                },
                {
                    "id": 49,
                    "variant": 1
                },
                {
                    "id": 50,
                    "variant": 1
                }
            ],
            [
                {
                    "id": 48,
                    "variant": 2
                },
                {
                    "id": 49,
                    "variant": 2
                },
                {
                    "id": 50,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 48,
                    "variant": 2
                },
                {
                    "id": 51,
                    "variant": 2
                },
                {
                    "id": 52,
                    "variant": 2
                }
            ]
        ],
        "damage": 400
    },
    {
        "section": "pa",
        "index": 29,
        "name": {
            "en": "P.Driver",
            "ja": "パイルドライバー"
        },
        "description": {
            "en": "A sun\ngenerator\nfries all",
            "ja": "目の前に たいよう\nジェネレーター！\n日の光でやきつくす"
        },
        "pa": [
            [
                {
                    "id": 32,
                    "variant": 1
                },
                {
                    "id": 33,
                    "variant": 1
                },
                {
                    "id": 34,
                    "variant": 1
                }
            ]
        ],
        "damage": 40
    },
    {
        "section": "pa",
        "index": 26,
        "name": {
            "en": "TimeBom+",
            "ja": "ギガカウントボム"
        },
        "description": {
            "en": "Sets a\nTimeBom",
            "ja": "あいてエリアに\nギガカウントボムを\nおく！"
        },
        "pa": [
            [
                {
                    "id": 97,
                    "variant": 0
                },
                {
                    "id": 97,
                    "variant": 1
                },
                {
                    "id": 97,
                    "variant": 2
                }
            ]
        ],
        "damage": 600
    },
    {
        "section": "pa",
        "index": 28,
        "name": {
            "en": "PoisPhar",
            "ja": "ポイズンファラオ"
        },
        "description": {
            "en": "Places a\npoisoned\nPharaoh",
            "ja": "てきエリアにどくを\n発生させる\nファラオぞうをおく"
        },
        "pa": [
            [
                {
                    "id": 82,
                    "variant": 0
                },
                {
                    "id": 216,
                    "variant": 1
                },
                {
                    "id": 204,
                    "variant": 0
                }
            ]
        ],
        "damage": null
    },
    {
        "section": "pa",
        "index": 27,
        "name": {
            "en": "BodyGrd",
            "ja": "ボディガード"
        },
        "description": {
            "en": "Assassin\nwho sneak\ninto enmy",
            "ja": "ウラのあんさつしゃ\nをやとい てきを\nはいじょしてもらう"
        },
        "pa": [
            [
                {
                    "id": 145,
                    "variant": 1
                },
                {
                    "id": 144,
                    "variant": 1
                },
                {
                    "id": 202,
                    "variant": 0
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 19,
        "name": {
            "en": "H-Burst",
            "ja": "ハイパーバースト"
        },
        "description": {
            "en": "Explosion\nspreads\ninto 1!",
            "ja": "まわり1マスに\nばくふうがひろがる\nさくれつだん！"
        },
        "pa": [
            [
                {
                    "id": 18,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 1
                },
                {
                    "id": 18,
                    "variant": 2
                }
            ]
        ],
        "damage": 100
    },
    null,
    null,
    {
        "name": {
            "en": "MegaSoul",
            "ja": "ロックソウル"
        },
        "description": {
            "en": "MegaSoul",
            "ja": "ロックソウル"
        }
    },
    {
        "name": {
            "en": "RollSoul",
            "ja": "ロールソウル"
        },
        "description": {
            "en": "RollSoul",
            "ja": "ロールソウル"
        }
    },
    {
        "name": {
            "en": "GutsSoul",
            "ja": "ガッツソウル"
        },
        "description": {
            "en": "GutsSoul",
            "ja": "ガッツソウル"
        }
    },
    {
        "name": {
            "en": "WindSoul",
            "ja": "ウインドソウル"
        },
        "description": {
            "en": "WindSoul",
            "ja": "ウインドソウル"
        }
    },
    {
        "name": {
            "en": "SrchSoul",
            "ja": "サーチソウル"
        },
        "description": {
            "en": "SrchSoul",
            "ja": "サーチソウル"
        }
    },
    {
        "name": {
            "en": "FireSoul",
            "ja": "ファイアソウル"
        },
        "description": {
            "en": "FireSoul",
            "ja": "ファイアソウル"
        }
    },
    {
        "name": {
            "en": "ThunSoul",
            "ja": "サンダーソウル"
        },
        "description": {
            "en": "ThunSoul",
            "ja": "サンダーソウル"
        }
    },
    {
        "name": {
            "en": "ProtSoul",
            "ja": "ブルースソウル"
        },
        "description": {
            "en": "ProtSoul",
            "ja": "ブルースソウル"
        }
    },
    {
        "name": {
            "en": "NumSoul",
            "ja": "ナンバーソウル"
        },
        "description": {
            "en": "NumSoul",
            "ja": "ナンバーソウル"
        }
    },
    {
        "name": {
            "en": "MetlSoul",
            "ja": "メタルソウル"
        },
        "description": {
            "en": "MetlSoul",
            "ja": "メタルソウル"
        }
    },
    {
        "name": {
            "en": "JunkSoul",
            "ja": "ジャンクソウル"
        },
        "description": {
            "en": "JunkSoul",
            "ja": "ジャンクソウル"
        }
    },
    {
        "name": {
            "en": "AquaSoul",
            "ja": "アクアソウル"
        },
        "description": {
            "en": "AquaSoul",
            "ja": "アクアソウル"
        }
    },
    {
        "name": {
            "en": "WoodSoul",
            "ja": "ウッドソウル"
        },
        "description": {
            "en": "WoodSoul",
            "ja": "ウッドソウル"
        }
    },
    {
        "name": {
            "en": "DuoSoul",
            "ja": "デューオソウル"
        },
        "description": {
            "en": "DuoSoul",
            "ja": "デューオソウル"
        }
    },
    {
        "name": {
            "en": "FrteSoul",
            "ja": "フォルテソウル"
        },
        "description": {
            "en": "FrteSoul",
            "ja": "フォルテソウル"
        }
    },
    {
        "name": {
            "en": "DarkSoul",
            "ja": "ダークソウル"
        },
        "description": {
            "en": "DarkSoul",
            "ja": "ダークソウル"
        }
    },
    null
]
;