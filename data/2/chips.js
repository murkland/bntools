const DATA_2_chips = [
    null,
    {
        "section": "standard",
        "index": 1,
        "name": {
            "en": "Cannon",
            "ja": "キャノン"
        },
        "description": {
            "en": "Cannon for\nattacking\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "ABCDE*",
        "mb": 16,
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
            "en": "Cannon for\nattacking\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "CDEFG*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 60,
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
            "en": "Cannon for\nattacking\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "EFGHI*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 4,
        "name": {
            "en": "Shotgun",
            "ja": "ショットガン"
        },
        "description": {
            "en": "Explodes\n1 square\nbehind",
            "ja": "ヒットすると\nおくの1マスに\nゆうばくする"
        },
        "element": "null",
        "codes": "BFHJN*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 5,
        "name": {
            "en": "V-Gun",
            "ja": "ブイガン"
        },
        "description": {
            "en": "Explodes\n2 diagonal\nsquares",
            "ja": "ヒットすると\nななめおく2マスに\nゆうばくする"
        },
        "element": "null",
        "codes": "AFGLP*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 6,
        "name": {
            "en": "CrossGun",
            "ja": "クロスガン"
        },
        "description": {
            "en": "Explodes\n4 diagonal\nsquares",
            "ja": "ヒットすると\nななめ4マスに\nゆうばくする"
        },
        "element": "null",
        "codes": "HJMQS*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 7,
        "name": {
            "en": "Spreader",
            "ja": "スプレッドガン"
        },
        "description": {
            "en": "Creates a\nlarge\nexplosion",
            "ja": "ヒットするとまわりの\n1マスにゆうばくする\nこうはんい攻撃"
        },
        "element": "null",
        "codes": "MNOPQ*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 8,
        "name": {
            "en": "Bubbler",
            "ja": "バブルショット"
        },
        "description": {
            "en": "Explodes\n1 square\nbehind",
            "ja": "ヒットすると\nおくの1マスに\nゆうばくする"
        },
        "element": "aqua",
        "codes": "BGHPR*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 9,
        "name": {
            "en": "Bub-V",
            "ja": "バブルブイ"
        },
        "description": {
            "en": "Explodes\n2 diagonal\nsquares",
            "ja": "ヒットすると\nななめおく2マスに\nゆうばくする"
        },
        "element": "aqua",
        "codes": "CDJNS*",
        "mb": 16,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 10,
        "name": {
            "en": "BubCross",
            "ja": "バブルクロス"
        },
        "description": {
            "en": "Explodes\n4 diagonal\nsquares",
            "ja": "ヒットすると\nななめ4マスに\nゆうばくする"
        },
        "element": "aqua",
        "codes": "KOPTV*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 11,
        "name": {
            "en": "BubSprd",
            "ja": "バブルスプレッド"
        },
        "description": {
            "en": "Creates a\nlarge\nexplosion",
            "ja": "ヒットするとまわりの\n1マスにゆうばくする\nこうはんい攻撃"
        },
        "element": "aqua",
        "codes": "EFILM*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 12,
        "name": {
            "en": "HeatShot",
            "ja": "ヒートショット"
        },
        "description": {
            "en": "Explodes\n1 square\nbehind",
            "ja": "ヒットすると\nおくの1マスに\nゆうばくする"
        },
        "element": "fire",
        "codes": "BGHPR*",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 13,
        "name": {
            "en": "Heat-V",
            "ja": "ヒートブイ"
        },
        "description": {
            "en": "Explodes\n2 diagonal\nsquares",
            "ja": "ヒットすると\nななめおく2マスに\nゆうばくする"
        },
        "element": "fire",
        "codes": "CDJNS*",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 14,
        "name": {
            "en": "HeatCros",
            "ja": "ヒートクロス"
        },
        "description": {
            "en": "Explodes\n4 diagonal\nsquares",
            "ja": "ヒットすると\nななめ4マスに\nゆうばくする"
        },
        "element": "fire",
        "codes": "KOPTV*",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 15,
        "name": {
            "en": "HeatSprd",
            "ja": "ヒートスプレッド"
        },
        "description": {
            "en": "Creates a\nlarge\nexplosion",
            "ja": "ヒットするとまわりの\n1マスにゆうばくする\nこうはんい攻撃"
        },
        "element": "fire",
        "codes": "EFILM*",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 16,
        "name": {
            "en": "MiniBomb",
            "ja": "ミニボム"
        },
        "description": {
            "en": "Throws a\nbomb 3\nsquares",
            "ja": "3マス前におちる\nボムをなげつける"
        },
        "element": "null",
        "codes": "BEGLO*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 17,
        "name": {
            "en": "LilBomb",
            "ja": "スモールボム"
        },
        "description": {
            "en": "Bomb that\nexplodes\nvertically",
            "ja": "ばくふうがたてにひろ\nがるボムを3マス前に\nなげつける"
        },
        "element": "null",
        "codes": "FJOQT*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 18,
        "name": {
            "en": "CrosBomb",
            "ja": "クロスボム"
        },
        "description": {
            "en": "Bomb that\nexplodes\nin a cross",
            "ja": "ばくふうがじゅうじに\nひろがるボムを3マス\n前になげつける"
        },
        "element": "null",
        "codes": "DJOQT*",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 19,
        "name": {
            "en": "BigBomb",
            "ja": "ビッグボム"
        },
        "description": {
            "en": "Bomb with\na 9-square\nexplosion",
            "ja": "ばくふうが9マスに\nひろがるボムを3マス\n前になげつける"
        },
        "element": "null",
        "codes": "OQTVY*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 20,
        "name": {
            "en": "TreeBom1",
            "ja": "フォレストボム1"
        },
        "description": {
            "en": "Tree seed!\nWater for\na PowerUp!",
            "ja": "3マス前に木のタネを\nなげる！タネに水を\nあてるとパワーアップ"
        },
        "element": "wood",
        "codes": "BGHPR*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 21,
        "name": {
            "en": "TreeBom2",
            "ja": "フォレストボム2"
        },
        "description": {
            "en": "Tree seed!\nWater for\na PowerUp!",
            "ja": "3マス前に木のタネを\nなげる！タネに水を\nあてるとパワーアップ"
        },
        "element": "wood",
        "codes": "CDJNS*",
        "mb": 15,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 22,
        "name": {
            "en": "TreeBom3",
            "ja": "フォレストボム3"
        },
        "description": {
            "en": "Tree seed!\nWater for\na PowerUp!",
            "ja": "3マス前に木のタネを\nなげる！タネに水を\nあてるとパワーアップ"
        },
        "element": "wood",
        "codes": "KOPTV*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 23,
        "name": {
            "en": "Sword",
            "ja": "ソード"
        },
        "description": {
            "en": "Cut enemy\nin front!\nRange is 1",
            "ja": "めのまえのてきを\nきりつける！\n攻撃はんいは1マス"
        },
        "element": "null",
        "codes": "AKLSY*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 24,
        "name": {
            "en": "WideSwrd",
            "ja": "ワイドソード"
        },
        "description": {
            "en": "Cut enemy\nin front!\nRange is 3",
            "ja": "めのまえのてきを\nきりつける！攻撃\nはんいはたて3マス"
        },
        "element": "null",
        "codes": "ACLQY*",
        "mb": 16,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 25,
        "name": {
            "en": "LongSwrd",
            "ja": "ロングソード"
        },
        "description": {
            "en": "Cut enemy\nin front!\nRange is 2",
            "ja": "めのまえのてきを\nきりつける！攻撃\nはんいはよこ2マス"
        },
        "element": "null",
        "codes": "AILOY*",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 26,
        "name": {
            "en": "FireSwrd",
            "ja": "フレイムソード"
        },
        "description": {
            "en": "Flame\nsword cuts\n3 vertical",
            "ja": "めのまえのたて3マス\nをきりつける\n炎のソード"
        },
        "element": "fire",
        "codes": "FHNRU*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 27,
        "name": {
            "en": "AquaSwrd",
            "ja": "アクアソード"
        },
        "description": {
            "en": "Water\nsword cuts\n3 vertical",
            "ja": "めのまえのたて3マス\nをきりつける\n水のソード"
        },
        "element": "aqua",
        "codes": "AHNRW*",
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
            "en": "ElecSwrd",
            "ja": "エレキソード"
        },
        "description": {
            "en": "Electric\nsword cuts\n3 vertical",
            "ja": "めのまえのたて3マス\nをきりつける\n電気のソード"
        },
        "element": "elec",
        "codes": "EHNRV*",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 29,
        "name": {
            "en": "FireBlde",
            "ja": "フレイムブレード"
        },
        "description": {
            "en": "Flame\nsword cuts\n2 horiz.",
            "ja": "めのまえのよこ2マス\nをきりつける\n炎のソード"
        },
        "element": "fire",
        "codes": "FHPRZ*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 30,
        "name": {
            "en": "AquaBlde",
            "ja": "アクアブレード"
        },
        "description": {
            "en": "Water\nsword cuts\n2 horiz.",
            "ja": "めのまえのよこ2マス\nをきりつける\n水のソード"
        },
        "element": "aqua",
        "codes": "AFJRZ*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 31,
        "name": {
            "en": "ElecBlde",
            "ja": "エレキブレード"
        },
        "description": {
            "en": "Electric\nsword cuts\n2 horiz.",
            "ja": "めのまえのよこ2マス\nをきりつける\n電気のソード"
        },
        "element": "elec",
        "codes": "EFMNR*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 32,
        "name": {
            "en": "StepSwrd",
            "ja": "フミコミザン"
        },
        "description": {
            "en": "Two steps,\nthen use a\nwide sword",
            "ja": "2マス前にふみこんで\nワイドソード！"
        },
        "element": "null",
        "codes": "DHMQU*",
        "mb": 54,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 37,
        "name": {
            "en": "Muramasa",
            "ja": "ムラマサ"
        },
        "description": {
            "en": "Sword that\nuses HPs\nto attack",
            "ja": "へっているHPぶんが\n攻撃力になる\nのろいのカタナ"
        },
        "element": "null",
        "codes": "NOTUW*",
        "mb": 88,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 36,
        "name": {
            "en": "CustSwrd",
            "ja": "カスタムソード"
        },
        "description": {
            "en": "Cust Gauge\n= Attack\nStrength",
            "ja": "カスタムゲージが\nマンタンにちかくなる\nほど攻撃力があがる！"
        },
        "element": "null",
        "codes": "BGKQT*",
        "mb": 68,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 33,
        "name": {
            "en": "Kunai1",
            "ja": "リョウテクナイ1"
        },
        "description": {
            "en": "Kunais up\nand down\n1 square",
            "ja": "3ヒットのクナイを\n1マス前の上下に"
        },
        "element": "null",
        "codes": "EILPS*",
        "mb": 48,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 34,
        "name": {
            "en": "Kunai2",
            "ja": "リョウテクナイ2"
        },
        "description": {
            "en": "Kunais up\nand down\n2 squares",
            "ja": "3ヒットのクナイを\n2マス前の上下に"
        },
        "element": "null",
        "codes": "DFJQR*",
        "mb": 64,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 35,
        "name": {
            "en": "Kunai3",
            "ja": "リョウテクナイ3"
        },
        "description": {
            "en": "Kunais up\nand down\n3 squares",
            "ja": "3ヒットのクナイを\n3マス前の上下に"
        },
        "element": "null",
        "codes": "CGHKN*",
        "mb": 78,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 39,
        "name": {
            "en": "Slasher",
            "ja": "イアイフォーム"
        },
        "description": {
            "en": "Cuts while\nA Button\nis held!",
            "ja": "Aボタンをおしつづけ\nてるあいだにはいって\nくるてきをきる！"
        },
        "element": "null",
        "codes": "ADHLQ*",
        "mb": 24,
        "version": null,
        "stars": 4,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 40,
        "name": {
            "en": "Shockwav",
            "ja": "ショックウェーブ"
        },
        "description": {
            "en": "Shock goes\nthrough\nenemies",
            "ja": "じめんをはってすすむ\nかんつう攻撃"
        },
        "element": "null",
        "codes": "HJLRU*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 41,
        "name": {
            "en": "Sonicwav",
            "ja": "ソニックウェーブ"
        },
        "description": {
            "en": "Shock goes\nthrough\nenemies",
            "ja": "じめんをはってすすむ\nかんつう攻撃"
        },
        "element": "null",
        "codes": "EIMSW*",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 42,
        "name": {
            "en": "Dynawave",
            "ja": "ダイナウェーブ"
        },
        "description": {
            "en": "Shock goes\nthrough\nenemies",
            "ja": "じめんをはってすすむ\nかんつう攻撃"
        },
        "element": "null",
        "codes": "GNQTV*",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 43,
        "name": {
            "en": "Quake1",
            "ja": "アースクエイク1"
        },
        "description": {
            "en": "Attack\ncracks the\nfloor",
            "ja": "3マス前にふんどう\nをおとして攻撃\nユカにはヒビがはいる"
        },
        "element": "null",
        "codes": "AMPQW*",
        "mb": 16,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 44,
        "name": {
            "en": "Quake2",
            "ja": "アースクエイク2"
        },
        "description": {
            "en": "Attack\ncracks the\nfloor",
            "ja": "3マス前にふんどう\nをおとして攻撃\nユカにはヒビがはいる"
        },
        "element": "null",
        "codes": "BGNQW*",
        "mb": 32,
        "version": null,
        "stars": 2,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 45,
        "name": {
            "en": "Quake3",
            "ja": "アースクエイク3"
        },
        "description": {
            "en": "Attack\ncracks the\nfloor",
            "ja": "3マス前にふんどう\nをおとして攻撃\nユカにはヒビがはいる"
        },
        "element": "null",
        "codes": "CEOQW*",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 46,
        "name": {
            "en": "GutPunch",
            "ja": "ガッツパンチ"
        },
        "description": {
            "en": "Punch that\npushes 1\nsquare",
            "ja": "めのまえの1マスに\nパンチ攻撃\nものを前におせる"
        },
        "element": "null",
        "codes": "BDHKN*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 47,
        "name": {
            "en": "ColdPnch",
            "ja": "コールドパンチ"
        },
        "description": {
            "en": "Ice punch\npushes 1\nsquare",
            "ja": "めのまえの1マスに\nこおりのパンチ！\nものを前におせる"
        },
        "element": "aqua",
        "codes": "BDLPS*",
        "mb": 8,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 186,
        "name": {
            "en": "Atk+20",
            "ja": "アタック+20"
        },
        "description": {
            "en": "+20 to\nselected\nAtkChip!",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+20できる"
        },
        "element": "null",
        "codes": "*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 187,
        "name": {
            "en": "Atk+30",
            "ja": "アタック+30"
        },
        "description": {
            "en": "+30 to\nselected\nAtkChip!",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+30できる"
        },
        "element": "null",
        "codes": "*",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 193,
        "name": {
            "en": "Navi+40",
            "ja": "ナビ+40"
        },
        "description": {
            "en": "+40 to\nselected\nNaviChip!",
            "ja": "ナビチップのあとに\nえらぶと 攻撃力を\n+40！"
        },
        "element": "null",
        "codes": "*",
        "mb": 42,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 48,
        "name": {
            "en": "DashAtk",
            "ja": "ダッシュアタック"
        },
        "description": {
            "en": "Dash right\nthrough\nenemies!",
            "ja": "てきをもかんつうする\nとっしん攻撃！"
        },
        "element": "null",
        "codes": "BDGJL*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 49,
        "name": {
            "en": "Wrecker",
            "ja": "テッキュウ"
        },
        "description": {
            "en": "Can break\n3rd square\nahead",
            "ja": "3マス前にテッキュウ\nをなげつける！\nパネルをはかいできる"
        },
        "element": "null",
        "codes": "OQSUW*",
        "mb": 16,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 50,
        "name": {
            "en": "CannBall",
            "ja": "ホウガン"
        },
        "description": {
            "en": "Can break\n3rd square\nahead",
            "ja": "3マス前にホウガンを\nなげつける！\nパネルをはかいできる"
        },
        "element": "null",
        "codes": "OPQRS*",
        "mb": 22,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 51,
        "name": {
            "en": "DoubNdl",
            "ja": "ダブルニードル"
        },
        "description": {
            "en": "2 volleys\nof needles",
            "ja": "2れんしゃのニードル\nをハッシャ！"
        },
        "element": "null",
        "codes": "ACFIJ*",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 52,
        "name": {
            "en": "TripNdl",
            "ja": "トリプルニードル"
        },
        "description": {
            "en": "3 volleys\nof needles",
            "ja": "3れんしゃのニードル\nをハッシャ！"
        },
        "element": "null",
        "codes": "CIMTV*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 53,
        "name": {
            "en": "QuadNdl",
            "ja": "テトラニードル"
        },
        "description": {
            "en": "4 volleys\nof needles",
            "ja": "4れんしゃのニードル\nをハッシャ！"
        },
        "element": "null",
        "codes": "CHIPU*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 54,
        "name": {
            "en": "Trident",
            "ja": "トライデント"
        },
        "description": {
            "en": "3 volleys\nof spears",
            "ja": "3れんしゃのヤリを\nハッシャ！"
        },
        "element": "null",
        "codes": "EIKOT*",
        "mb": 30,
        "version": null,
        "stars": 4,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 55,
        "name": {
            "en": "Ratton1",
            "ja": "ラットン1"
        },
        "description": {
            "en": "A crawling\nrat that\nturns once",
            "ja": "じめんをはってすすむ\nねずみミサイル\n1どだけ まがれる"
        },
        "element": "null",
        "codes": "HIJKL*",
        "mb": 26,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 56,
        "name": {
            "en": "Ratton2",
            "ja": "ラットン2"
        },
        "description": {
            "en": "A crawling\nrat that\nturns once",
            "ja": "じめんをはってすすむ\nねずみミサイル\n1どだけ まがれる"
        },
        "element": "null",
        "codes": "JKLMN*",
        "mb": 32,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 57,
        "name": {
            "en": "Ratton3",
            "ja": "ラットン3"
        },
        "description": {
            "en": "A crawling\nrat that\nturns once",
            "ja": "じめんをはってすすむ\nねずみミサイル\n1どだけ まがれる"
        },
        "element": "null",
        "codes": "LMNOP*",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 58,
        "name": {
            "en": "FireRat",
            "ja": "ラットンハナビ"
        },
        "description": {
            "en": "Amazing\nwhen lit\nwith fire",
            "ja": "炎属性攻撃があたると\nハッシンする\nすごいラットン"
        },
        "element": "null",
        "codes": "BFGHR*",
        "mb": 30,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 59,
        "name": {
            "en": "Tornado",
            "ja": "トルネード"
        },
        "description": {
            "en": "8-hit\ntornado 2\nahead",
            "ja": "2マス前にたつまきを\nハッセイさせる\nたつまきは8ヒット"
        },
        "element": "null",
        "codes": "EJLMQ*",
        "mb": 22,
        "version": null,
        "stars": 4,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 60,
        "name": {
            "en": "Twister",
            "ja": "コガラシ"
        },
        "description": {
            "en": "8-hit\ntornado 2\nahead",
            "ja": "2マス前にたつまきを\nハッセイさせる\nたつまきは8ヒット"
        },
        "element": "wood",
        "codes": "NOTUY*",
        "mb": 22,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 61,
        "name": {
            "en": "Blower",
            "ja": "ネップウ"
        },
        "description": {
            "en": "8-hit\ntornado 2\nahead",
            "ja": "2マス前にたつまきを\nハッセイさせる\nたつまきは8ヒット"
        },
        "element": "fire",
        "codes": "PRTWZ*",
        "mb": 22,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 62,
        "name": {
            "en": "Burner",
            "ja": "バーニングボディ"
        },
        "description": {
            "en": "Envelopes\nyou with\nflames!",
            "ja": "じぶんのいるマスと\nその上下左右を\n炎にまきこむ！"
        },
        "element": "fire",
        "codes": "ABFLS*",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 63,
        "name": {
            "en": "ZapRing1",
            "ja": "ラビリング1"
        },
        "description": {
            "en": "Paralyzing\nelectric\nrings!",
            "ja": "電気のわなげ攻撃！\nあたったあいては\nしばらくマヒする！"
        },
        "element": "elec",
        "codes": "AMPQW*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 64,
        "name": {
            "en": "ZapRing2",
            "ja": "ラビリング2"
        },
        "description": {
            "en": "Paralyzing\nelectric\nrings!",
            "ja": "電気のわなげ攻撃！\nあたったあいては\nしばらくマヒする！"
        },
        "element": "elec",
        "codes": "BGNRS*",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 65,
        "name": {
            "en": "ZapRing3",
            "ja": "ラビリング3"
        },
        "description": {
            "en": "Paralyzing\nelectric\nrings!",
            "ja": "電気のわなげ攻撃！\nあたったあいては\nしばらくマヒする！"
        },
        "element": "elec",
        "codes": "CEOTZ*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 69,
        "name": {
            "en": "Spice1",
            "ja": "バッドスパイス1"
        },
        "description": {
            "en": "Unhealthy\npowder on\nall grass",
            "ja": "すべてのくさむらパネ\nルにからだにわるい\nこなをはっせいさせる"
        },
        "element": "wood",
        "codes": "ACGQT*",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 70,
        "name": {
            "en": "Spice2",
            "ja": "バッドスパイス2"
        },
        "description": {
            "en": "Unhealthy\npowder on\nall grass",
            "ja": "すべてのくさむらパネ\nルにからだにわるい\nこなをはっせいさせる"
        },
        "element": "wood",
        "codes": "BEHJN*",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 71,
        "name": {
            "en": "Spice3",
            "ja": "バッドスパイス3"
        },
        "description": {
            "en": "Unhealthy\npowder on\nall grass",
            "ja": "すべてのくさむらパネ\nルにからだにわるい\nこなをはっせいさせる"
        },
        "element": "wood",
        "codes": "DKMPQ*",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 66,
        "name": {
            "en": "Satelit1",
            "ja": "サテライト1"
        },
        "description": {
            "en": "A floating\n& spinning\nsatellite",
            "ja": "ユラユラとぶえいせい\nしょうがいぶつに\nあたるとまわりだす"
        },
        "element": "elec",
        "codes": "GOQUW*",
        "mb": 20,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 67,
        "name": {
            "en": "Satelit2",
            "ja": "サテライト2"
        },
        "description": {
            "en": "A floating\n& spinning\nsatellite",
            "ja": "ユラユラとぶえいせい\nしょうがいぶつに\nあたるとまわりだす"
        },
        "element": "elec",
        "codes": "HJKPR*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 68,
        "name": {
            "en": "Satelit3",
            "ja": "サテライト3"
        },
        "description": {
            "en": "A floating\n& spinning\nsatellite",
            "ja": "ユラユラとぶえいせい\nしょうがいぶつに\nあたるとまわりだす"
        },
        "element": "elec",
        "codes": "LSTYZ*",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 75,
        "name": {
            "en": "Yo-Yo1",
            "ja": "ヨーヨー1"
        },
        "description": {
            "en": "A 3-square\nyo-yo\nattack!",
            "ja": "3マス前までとぶ\nヨーヨー攻撃！"
        },
        "element": "null",
        "codes": "CERTV*",
        "mb": 36,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 76,
        "name": {
            "en": "Yo-Yo2",
            "ja": "ヨーヨー2"
        },
        "description": {
            "en": "A 3-square\nyo-yo\nattack!",
            "ja": "3マス前までとぶ\nヨーヨー攻撃！"
        },
        "element": "null",
        "codes": "AGJKN*",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 77,
        "name": {
            "en": "Yo-Yo3",
            "ja": "ヨーヨー3"
        },
        "description": {
            "en": "A 3-square\nyo-yo\nattack!",
            "ja": "3マス前までとぶ\nヨーヨー攻撃！"
        },
        "element": "null",
        "codes": "DIMSY*",
        "mb": 44,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 72,
        "name": {
            "en": "MagBomb1",
            "ja": "マグネットボム1"
        },
        "description": {
            "en": "Stops the\nenemy in\nits tracks",
            "ja": "てきのうごきを\nしばらくのあいだ\nあしどめする！"
        },
        "element": "elec",
        "codes": "FGJMN*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 73,
        "name": {
            "en": "MagBomb2",
            "ja": "マグネットボム2"
        },
        "description": {
            "en": "Stops the\nenemy in\nits tracks",
            "ja": "てきのうごきを\nしばらくのあいだ\nあしどめする！"
        },
        "element": "elec",
        "codes": "BDIRT*",
        "mb": 14,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 74,
        "name": {
            "en": "MagBomb3",
            "ja": "マグネットボム3"
        },
        "description": {
            "en": "Stops the\nenemy in\nits tracks",
            "ja": "てきのうごきを\nしばらくのあいだ\nあしどめする！"
        },
        "element": "elec",
        "codes": "HKOQS*",
        "mb": 18,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 91,
        "name": {
            "en": "Meteor9",
            "ja": "メテオ9"
        },
        "description": {
            "en": "Magic wand\nshoots 9\nmeteors",
            "ja": "いんせきを9発\nふらせるマホウの\nツエをおく"
        },
        "element": "fire",
        "codes": "CELSV*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 92,
        "name": {
            "en": "Meteor12",
            "ja": "メテオ12"
        },
        "description": {
            "en": "Magic wand\nshoots 12\nmeteors",
            "ja": "いんせきを12発\nふらせるマホウの\nツエをおく"
        },
        "element": "fire",
        "codes": "ACFJW*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 93,
        "name": {
            "en": "Meteor15",
            "ja": "メテオ15"
        },
        "description": {
            "en": "Magic wand\nshoots 15\nmeteors",
            "ja": "いんせきを15発\nふらせるマホウの\nツエをおく"
        },
        "element": "fire",
        "codes": "DGHRZ*",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 94,
        "name": {
            "en": "Meteor18",
            "ja": "メテオ18"
        },
        "description": {
            "en": "Magic wand\nshoots 18\nmeteors",
            "ja": "いんせきを18発\nふらせるマホウの\nツエをおく"
        },
        "element": "fire",
        "codes": "BGIKO*",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 81,
        "name": {
            "en": "Hammer",
            "ja": "ブレイクハンマー"
        },
        "description": {
            "en": "Hammer for\nsmashing\nthings!",
            "ja": "めのまえにハンマー\n攻撃！しょうがいぶつ\nをこわすことができる"
        },
        "element": "null",
        "codes": "RTUVZ*",
        "mb": 24,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 78,
        "name": {
            "en": "CrsShld1",
            "ja": "カースシールド1"
        },
        "description": {
            "en": "Guard then\nbite into\nthe enemy",
            "ja": "タイミングガードして\nそのあと前のてきに\nかみつくシールド"
        },
        "element": "null",
        "codes": "AOPSZ*",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 79,
        "name": {
            "en": "CrsShld2",
            "ja": "カースシールド2"
        },
        "description": {
            "en": "Guard then\nbite into\nthe enemy",
            "ja": "タイミングガードして\nそのあと前のてきに\nかみつくシールド"
        },
        "element": "null",
        "codes": "AOPTV*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 170,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 80,
        "name": {
            "en": "CrsShld3",
            "ja": "カースシールド3"
        },
        "description": {
            "en": "Guard then\nbite into\nthe enemy",
            "ja": "タイミングガードして\nそのあと前のてきに\nかみつくシールド"
        },
        "element": "null",
        "codes": "AOPUW*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 210,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 95,
        "name": {
            "en": "TimeBom1",
            "ja": "カウントボム1"
        },
        "description": {
            "en": "An area-\nwide time\nbomb!",
            "ja": "てきエリアにじげん\nばくだんをセット\nエリア中にばくはつ！"
        },
        "element": "null",
        "codes": "CGKMZ*",
        "mb": 32,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 96,
        "name": {
            "en": "TimeBom2",
            "ja": "カウントボム2"
        },
        "description": {
            "en": "An area-\nwide time\nbomb!",
            "ja": "てきエリアにじげん\nばくだんをセット\nエリア中にばくはつ！"
        },
        "element": "null",
        "codes": "FGKOZ*",
        "mb": 48,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 97,
        "name": {
            "en": "TimeBom3",
            "ja": "カウントボム3"
        },
        "description": {
            "en": "An area-\nwide time\nbomb!",
            "ja": "てきエリアにじげん\nばくだんをセット\nエリア中にばくはつ！"
        },
        "element": "null",
        "codes": "EGKPZ*",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 98,
        "name": {
            "en": "LilCloud",
            "ja": "クラウド"
        },
        "description": {
            "en": "Rain cloud\ngoes back\nand forth",
            "ja": "あまぐもがはっせいし\nたてにおうふくして\nあめをふらせる"
        },
        "element": "aqua",
        "codes": "CGIKN*",
        "mb": 16,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 99,
        "name": {
            "en": "MedCloud",
            "ja": "モアクラウド"
        },
        "description": {
            "en": "Rain cloud\ngoes back\nand forth",
            "ja": "あまぐもがはっせいし\nたてにおうふくして\nあめをふらせる"
        },
        "element": "aqua",
        "codes": "DHJLO*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 100,
        "name": {
            "en": "BigCloud",
            "ja": "モストクラウド"
        },
        "description": {
            "en": "Rain cloud\ngoes back\nand forth",
            "ja": "あまぐもがはっせいし\nたてにおうふくして\nあめをふらせる"
        },
        "element": "aqua",
        "codes": "QRTVW*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 101,
        "name": {
            "en": "Mine",
            "ja": "ステルスマイン"
        },
        "description": {
            "en": "Place mine\nin enemy\narea",
            "ja": "てきエリアのどこかに\nみえないじらいをおく"
        },
        "element": "null",
        "codes": "LNRSV*",
        "mb": 12,
        "version": null,
        "stars": 4,
        "damage": 300,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 102,
        "name": {
            "en": "FrntSnsr",
            "ja": "フロントセンサー"
        },
        "description": {
            "en": "Automatic\ndynamite\ndevice",
            "ja": "前方にてきがきたら\nじどうでバクハツする\nダイナマイト"
        },
        "element": "null",
        "codes": "HMQRT*",
        "mb": 14,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 103,
        "name": {
            "en": "DblSnsr",
            "ja": "ダブルセンサー"
        },
        "description": {
            "en": "Diagonal\ndynamite\ndevice",
            "ja": "ななめにてきがきたら\nじどうでバクハツする\nダイナマイト"
        },
        "element": "null",
        "codes": "EJPWY*",
        "mb": 24,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 104,
        "name": {
            "en": "Remobit1",
            "ja": "リモコゴロー1"
        },
        "description": {
            "en": "Generates\nremobit in\nenemy area",
            "ja": "めのまえにパララを\nおいて てきエリアに\nリモコゴローはっせい"
        },
        "element": "elec",
        "codes": "EGJKN*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 105,
        "name": {
            "en": "Remobit2",
            "ja": "リモコゴロー2"
        },
        "description": {
            "en": "Generates\nremobit in\nenemy area",
            "ja": "めのまえにパララを\nおいて てきエリアに\nリモコゴローはっせい"
        },
        "element": "elec",
        "codes": "BFIRU*",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 106,
        "name": {
            "en": "Remobit3",
            "ja": "リモコゴロー3"
        },
        "description": {
            "en": "Generates\nremobit in\nenemy area",
            "ja": "めのまえにパララを\nおいて てきエリアに\nリモコゴローはっせい"
        },
        "element": "elec",
        "codes": "ALMTY*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 107,
        "name": {
            "en": "AquaBall",
            "ja": "アクアバルーン"
        },
        "description": {
            "en": "Pops when\nit hits\nsomething",
            "ja": "ものにあたるとエリア\n中にバクハツ！ダメー\nジは攻撃力にへんかん"
        },
        "element": "aqua",
        "codes": "ABQTW*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 108,
        "name": {
            "en": "ElecBall",
            "ja": "エレキバルーン"
        },
        "description": {
            "en": "Pops when\nit hits\nsomething",
            "ja": "ものにあたるとエリア\n中にバクハツ！ダメー\nジは攻撃力にへんかん"
        },
        "element": "elec",
        "codes": "EHJKV*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 109,
        "name": {
            "en": "HeatBall",
            "ja": "ヒートバルーン"
        },
        "description": {
            "en": "Pops when\nit hits\nsomething",
            "ja": "ものにあたるとエリア\n中にバクハツ！ダメー\nジは攻撃力にへんかん"
        },
        "element": "fire",
        "codes": "CFRSU*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 110,
        "name": {
            "en": "Geyser",
            "ja": "カンケツセン"
        },
        "description": {
            "en": "Geyser if\nthere is\nno panel",
            "ja": "3マス前になげる\nパネルのないマスに\nおちると水がふきだす"
        },
        "element": "aqua",
        "codes": "ABDLS*",
        "mb": 40,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 111,
        "name": {
            "en": "LavaDrag",
            "ja": "マグマドラゴン"
        },
        "description": {
            "en": "Summons a\nnasty lava\ndragon!",
            "ja": "めのまえのあなから\nマグマドラゴンを\nよびだす！"
        },
        "element": "fire",
        "codes": "FGORY*",
        "mb": 60,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 112,
        "name": {
            "en": "GodStone",
            "ja": "ゴッドストーン"
        },
        "description": {
            "en": "Summons a\nGod Stone!",
            "ja": "めのまえのあなから\nゴッドストーンを\nよびだす！"
        },
        "element": "null",
        "codes": "EILQU*",
        "mb": 60,
        "version": null,
        "stars": 5,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 113,
        "name": {
            "en": "OldWood",
            "ja": "オールドウッド"
        },
        "description": {
            "en": "Summons\nOld Wood!",
            "ja": "めのまえのあなから\nオールドウッドを\nよびだす！"
        },
        "element": "wood",
        "codes": "CMSTW*",
        "mb": 60,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 87,
        "name": {
            "en": "PoisMask",
            "ja": "ポイズンマスク"
        },
        "description": {
            "en": "Poison 1\npanel with\nA Button!",
            "ja": "Aボタンをおしつづけ\nてタテをかまえ､その\n前のマスにはどくを！"
        },
        "element": "null",
        "codes": "DSUWZ*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 88,
        "name": {
            "en": "PoisFace",
            "ja": "ポイズンフェイス"
        },
        "description": {
            "en": "Spread\npoison w/\nA Button!",
            "ja": "Aボタンをおしつづけ\nてタテをかまえ､その\nまわりにはどくを！"
        },
        "element": "null",
        "codes": "PQUWY*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 89,
        "name": {
            "en": "Whirlpl",
            "ja": "ウズシオ"
        },
        "description": {
            "en": "Whirlpool\nkills weak\nenemies!",
            "ja": "うずしおがはっせい！\nおとしいれてやると\nザコはそくし！"
        },
        "element": "null",
        "codes": "ACEGI*",
        "mb": 20,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 90,
        "name": {
            "en": "Blckhole",
            "ja": "ブラックホール"
        },
        "description": {
            "en": "Black hole\nkills weak\nenemies!",
            "ja": "ブラックホール！\nおとしいれてやると\nザコはそくし！"
        },
        "element": "null",
        "codes": "BDFHJ*",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 114,
        "name": {
            "en": "Guard",
            "ja": "メットガード"
        },
        "description": {
            "en": "Repel the\nenemy's\nattack",
            "ja": "タイミングよくおすと\nてきの攻撃をしょうげ\nきはにしてはねかえす"
        },
        "element": "null",
        "codes": "*",
        "mb": 2,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 159,
        "name": {
            "en": "Barrier",
            "ja": "バリア"
        },
        "description": {
            "en": "Nullify\ndamage one\ntime!",
            "ja": "いちどだけ\nダメージをむこうか！"
        },
        "element": "null",
        "codes": "BELST*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 115,
        "name": {
            "en": "PanlOut1",
            "ja": "パネルアウト1"
        },
        "description": {
            "en": "Destroy\n1 panel in\nfront",
            "ja": "パネルはかい攻撃！\nめのまえの1マスを\nけしさってしまう"
        },
        "element": "null",
        "codes": "ABDLS*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 116,
        "name": {
            "en": "PanlOut3",
            "ja": "パネルアウト3"
        },
        "description": {
            "en": "Destroy\n3 panels\nin front",
            "ja": "パネルはかい攻撃！\nめのまえのたて3マス\nを けしさってしまう"
        },
        "element": "null",
        "codes": "CENRY*",
        "mb": 8,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 117,
        "name": {
            "en": "LineOut",
            "ja": "ラインアウト"
        },
        "description": {
            "en": "Destroy 1\nline of\npanels!",
            "ja": "あいてエリアの\nよこ1れつのパネルを\nはかいしてしまう！"
        },
        "element": "fire",
        "codes": "FHJQY*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 83,
        "name": {
            "en": "Lance",
            "ja": "バンブーランス"
        },
        "description": {
            "en": "A lance\nthrough\nback line",
            "ja": "てきエリアのいちばん\nおくのたてれつに\nとつぜんのたけやり！"
        },
        "element": "wood",
        "codes": "OPTVY*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 82,
        "name": {
            "en": "ZeusHamr",
            "ja": "ゼウスハンマー"
        },
        "description": {
            "en": "Damage\nall if\npanel",
            "ja": "パネルのあるマスなら\nてきみかたとわず\n大ダメージ！"
        },
        "element": "null",
        "codes": "JKOVZ*",
        "mb": 70,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 84,
        "name": {
            "en": "BrnzFist",
            "ja": "ブロンズフィスト"
        },
        "description": {
            "en": "Fist of\ndeath!",
            "ja": "かみのくににつたわる\nひっさつのこぶし！"
        },
        "element": "null",
        "codes": "BNORS*",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 85,
        "name": {
            "en": "SilvFist",
            "ja": "シルバーフィスト"
        },
        "description": {
            "en": "Fist of\ndeath!",
            "ja": "かみのくににつたわる\nひっさつのこぶし！"
        },
        "element": "null",
        "codes": "EILSV*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 86,
        "name": {
            "en": "GoldFist",
            "ja": "ゴールドフィスト"
        },
        "description": {
            "en": "Fist of\ndeath!",
            "ja": "かみのくににつたわる\nひっさつのこぶし！"
        },
        "element": "null",
        "codes": "DGLOZ*",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 38,
        "name": {
            "en": "VarSwrd",
            "ja": "バリアブルソード"
        },
        "description": {
            "en": "A magical,\nshifting\nsword",
            "ja": "へんげんじざいの\nテクニカルソード"
        },
        "element": "null",
        "codes": "BLNTZ*",
        "mb": 40,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 120,
        "name": {
            "en": "Recov10",
            "ja": "リカバリー10"
        },
        "description": {
            "en": "Recovers\n10HP",
            "ja": "HPを10かいふく"
        },
        "element": "null",
        "codes": "ACEGL*",
        "mb": 2,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 121,
        "name": {
            "en": "Recov30",
            "ja": "リカバリー30"
        },
        "description": {
            "en": "Recovers\n30HP",
            "ja": "HPを30かいふく"
        },
        "element": "null",
        "codes": "BDFHM*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 122,
        "name": {
            "en": "Recov50",
            "ja": "リカバリー50"
        },
        "description": {
            "en": "Recovers\n50HP",
            "ja": "HPを50かいふく"
        },
        "element": "null",
        "codes": "CEGIN*",
        "mb": 8,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 123,
        "name": {
            "en": "Recov80",
            "ja": "リカバリー80"
        },
        "description": {
            "en": "Recovers\n80HP",
            "ja": "HPを80かいふく"
        },
        "element": "null",
        "codes": "DFHJO*",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 124,
        "name": {
            "en": "Recov120",
            "ja": "リカバリー120"
        },
        "description": {
            "en": "Recovers\n120HP",
            "ja": "HPを120かいふく"
        },
        "element": "null",
        "codes": "OQSUW*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 125,
        "name": {
            "en": "Recov150",
            "ja": "リカバリー150"
        },
        "description": {
            "en": "Recovers\n150HP",
            "ja": "HPを150かいふく"
        },
        "element": "null",
        "codes": "NPRTV*",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 126,
        "name": {
            "en": "Recov200",
            "ja": "リカバリー200"
        },
        "description": {
            "en": "Recovers\n200HP",
            "ja": "HPを200かいふく"
        },
        "element": "null",
        "codes": "MNUVW*",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 127,
        "name": {
            "en": "Recov300",
            "ja": "リカバリー300"
        },
        "description": {
            "en": "Recovers\n300HP",
            "ja": "HPを300かいふく"
        },
        "element": "null",
        "codes": "ORVWZ*",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 128,
        "name": {
            "en": "PanlGrab",
            "ja": "パネルスチール"
        },
        "description": {
            "en": "Steals 1\nenemy\nsquare!",
            "ja": "前方のてきエリアの\n1マスを じぶんの\nエリアにぬりかえる"
        },
        "element": "null",
        "codes": "BHKLP*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 129,
        "name": {
            "en": "AreaGrab",
            "ja": "エリアスチール"
        },
        "description": {
            "en": "Steals\nleft edge\nfrom enemy",
            "ja": "てきのエリアのひだり\nはし1れつを じぶん\nのエリアにぬりかえる"
        },
        "element": "null",
        "codes": "ELRSZ*",
        "mb": 8,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 130,
        "name": {
            "en": "GrabRvng",
            "ja": "スチールパニシュ"
        },
        "description": {
            "en": "Punishes\nfor stolen\npanels!",
            "ja": "ぬすまれたパネルの\nかずだけ あいてに\nてんばつがくだる！"
        },
        "element": "null",
        "codes": "ALPSW*",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 131,
        "name": {
            "en": "Geddon1",
            "ja": "デスマッチ1"
        },
        "description": {
            "en": "Cracks all\npanels!",
            "ja": "パネルのあるマスが\nすべてひびに！"
        },
        "element": "null",
        "codes": "CKLQS*",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 132,
        "name": {
            "en": "Geddon2",
            "ja": "デスマッチ2"
        },
        "description": {
            "en": "Breaks all\nempty\nsquares!",
            "ja": "あいているマスが\nすべてこわれる！"
        },
        "element": "null",
        "codes": "JMRTZ*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 133,
        "name": {
            "en": "Geddon3",
            "ja": "デスマッチ3"
        },
        "description": {
            "en": "Turns all\npanels to\nswamp!",
            "ja": "パネルのあるマスが\nすべてどくぬまに！"
        },
        "element": "null",
        "codes": "EJNPY*",
        "mb": 48,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 118,
        "name": {
            "en": "Catcher",
            "ja": "キャッチマシーン"
        },
        "description": {
            "en": "Sends UFO\nto steal a\nchip",
            "ja": "前方に\nチップをうばいさる\nUFOをなげつける"
        },
        "element": "null",
        "codes": "FIJNT*",
        "mb": 12,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 119,
        "name": {
            "en": "Mindbndr",
            "ja": "アナザーマインド"
        },
        "description": {
            "en": "Enemy\nloses\ncontrol",
            "ja": "あたるとあいては\nおもったとおりに\nいどうできなくなる"
        },
        "element": "null",
        "codes": "DIMNT*",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 134,
        "name": {
            "en": "Escape",
            "ja": "エスケープ"
        },
        "description": {
            "en": "Escapes\nfrom some\nenemies",
            "ja": "てきから にげる！\nあいてによっては\nにげられないときも"
        },
        "element": "null",
        "codes": "FHJLN*",
        "mb": 64,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 135,
        "name": {
            "en": "AirShoes",
            "ja": "エアシューズ"
        },
        "description": {
            "en": "Stand on\nempty\nsquare",
            "ja": "いちどだけ\nパネルのないマスに\nたつことができる"
        },
        "element": "null",
        "codes": "AJOVZ*",
        "mb": 12,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 136,
        "name": {
            "en": "Repair",
            "ja": "パネルリターン"
        },
        "description": {
            "en": "Fixes your\nside's\npanels",
            "ja": "じぶんのエリアの\nパネルのじょうたいを\nかいふくさせる"
        },
        "element": "null",
        "codes": "ACELP*",
        "mb": 8,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 137,
        "name": {
            "en": "Candle1",
            "ja": "リモローソク1"
        },
        "description": {
            "en": "Places a\nhealing\ncandle",
            "ja": "HPをじょじょに\nかいふくさせてくれる\nローソクをおく"
        },
        "element": "null",
        "codes": "CFIMV*",
        "mb": 50,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 138,
        "name": {
            "en": "Candle2",
            "ja": "リモローソク2"
        },
        "description": {
            "en": "Places a\nhealing\ncandle",
            "ja": "HPをじょじょに\nかいふくさせてくれる\nローソクをおく"
        },
        "element": "null",
        "codes": "AGJLT*",
        "mb": 60,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 139,
        "name": {
            "en": "Candle3",
            "ja": "リモローソク3"
        },
        "description": {
            "en": "Places a\nhealing\ncandle",
            "ja": "HPをじょじょに\nかいふくさせてくれる\nローソクをおく"
        },
        "element": "null",
        "codes": "BEHNW*",
        "mb": 70,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 140,
        "name": {
            "en": "RockCube",
            "ja": "ストーンキューブ"
        },
        "description": {
            "en": "Places a\nstone cube\nin front",
            "ja": "目の前のマスに\nストーンキューブを\nおく"
        },
        "element": "null",
        "codes": "BDGMV*",
        "mb": 16,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 141,
        "name": {
            "en": "Prism",
            "ja": "プリズム"
        },
        "description": {
            "en": "Shoots all\nover after\nit hits",
            "ja": "攻撃をあてると\nらんはんしゃして\nまわりのてきにあたる"
        },
        "element": "null",
        "codes": "BCLNQ*",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 142,
        "name": {
            "en": "Guardian",
            "ja": "オジゾウサン"
        },
        "description": {
            "en": "Statue\npunishes\nwhen hit",
            "ja": "目の前のマスに\nこわすとバチがあたる\nオジゾウサンをおく"
        },
        "element": "null",
        "codes": "OPUVZ*",
        "mb": 54,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 143,
        "name": {
            "en": "Wind",
            "ja": "トップウ"
        },
        "description": {
            "en": "WindBox\nblows at\nenemy area",
            "ja": "ウインドボックスを\nおいててきエリアに\nかぜをふかせる"
        },
        "element": "null",
        "codes": "GJOQT*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 144,
        "name": {
            "en": "Fan",
            "ja": "スイコミ"
        },
        "description": {
            "en": "VacuumFan\nsucks from\nenemy area",
            "ja": "バキュームファンを\nおき あいてエリアの\nてきをすいよせる"
        },
        "element": "null",
        "codes": "AGLNY*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 145,
        "name": {
            "en": "Anubis",
            "ja": "ポイズンアヌビス"
        },
        "description": {
            "en": "Anubis\npoisons\nenemy area",
            "ja": "てきエリアにどくを\nはっせいさせる\nアヌビスぞうをおく！"
        },
        "element": "null",
        "codes": "HKMUW*",
        "mb": 90,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 146,
        "name": {
            "en": "SloGauge",
            "ja": "ヘビーゲージ"
        },
        "description": {
            "en": "Cust Gauge\nslows down\nfor battle",
            "ja": "バトル中ずっと\nカスタムゲージの\nスピードがおそくなる"
        },
        "element": "null",
        "codes": "*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 147,
        "name": {
            "en": "FstGauge",
            "ja": "クイックゲージ"
        },
        "description": {
            "en": "Cust Gauge\nspeeds up\nfor battle",
            "ja": "バトル中ずっと\nカスタムゲージの\nスピードがはやくなる"
        },
        "element": "null",
        "codes": "*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 148,
        "name": {
            "en": "FullCust",
            "ja": "フルカスタム"
        },
        "description": {
            "en": "Cust Gauge\nis always\nfull!",
            "ja": "カスタムゲージが\nしゅんじにマンタンに\nなる！"
        },
        "element": "null",
        "codes": "*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 149,
        "name": {
            "en": "Invis1",
            "ja": "インビジブル1"
        },
        "description": {
            "en": "Invisible\nfor a\nwhile",
            "ja": "すこしのあいだ\nとうめいになって\n攻撃にあたらない"
        },
        "element": "null",
        "codes": "AFLRU*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 150,
        "name": {
            "en": "Invis2",
            "ja": "インビジブル2"
        },
        "description": {
            "en": "Invisible\nfor a\nwhile",
            "ja": "すこしのあいだ\nとうめいになって\n攻撃にあたらない"
        },
        "element": "null",
        "codes": "BHMQV*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 151,
        "name": {
            "en": "Invis3",
            "ja": "インビジブル3"
        },
        "description": {
            "en": "Invisible\nfor a\nwhile",
            "ja": "すこしのあいだ\nとうめいになって\n攻撃にあたらない"
        },
        "element": "null",
        "codes": "CGKPW*",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 152,
        "name": {
            "en": "DropDown",
            "ja": "テンジョウウラ"
        },
        "description": {
            "en": "Invisible\nuntil you\nattack!",
            "ja": "チップ攻撃をくりだす\nまでのあいだ､\nインビジブルに！"
        },
        "element": "null",
        "codes": "ACFQS*",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 153,
        "name": {
            "en": "PopUp",
            "ja": "ユカシタ"
        },
        "description": {
            "en": "Invisible\nexcept for\nattack!",
            "ja": "しばらくのあいだチッ\nプ攻撃のときいがい\nインビジブルに！"
        },
        "element": "null",
        "codes": "DIJTW*",
        "mb": 84,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 154,
        "name": {
            "en": "StoneBod",
            "ja": "ストーンボディ"
        },
        "description": {
            "en": "Stone body\ntakes only\n1HP damage",
            "ja": "いっていじかん\nいしになってダメージ\nを1しかうけない"
        },
        "element": "null",
        "codes": "CESTW*",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 155,
        "name": {
            "en": "Shadow1",
            "ja": "カゲブンシン1"
        },
        "description": {
            "en": "Only sword\nattacks\nhurt you",
            "ja": "いっていじかん\nソードけいの攻撃\nいがいにはムテキ"
        },
        "element": "null",
        "codes": "BGHLR*",
        "mb": 32,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 156,
        "name": {
            "en": "Shadow2",
            "ja": "カゲブンシン2"
        },
        "description": {
            "en": "Only sword\nattacks\nhurt you",
            "ja": "いっていじかん\nソードけいの攻撃\nいがいにはムテキ"
        },
        "element": "null",
        "codes": "DEJMT*",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 157,
        "name": {
            "en": "Shadow3",
            "ja": "カゲブンシン3"
        },
        "description": {
            "en": "Only sword\nattacks\nhurt you",
            "ja": "いっていじかん\nソードけいの攻撃\nいがいにはムテキ"
        },
        "element": "null",
        "codes": "CFKNV*",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 158,
        "name": {
            "en": "UnderSht",
            "ja": "アンダーシャツ"
        },
        "description": {
            "en": "Lethal hit\nreduced to\njust 1HP!",
            "ja": "ちしりょうのダメージ\nをくらってもHP1で\nとりあえずたえる！"
        },
        "element": "null",
        "codes": "HJNRW*",
        "mb": 18,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 160,
        "name": {
            "en": "BblWrap",
            "ja": "バブルラップ"
        },
        "description": {
            "en": "Water\nbarrier\nreforms",
            "ja": "水属性のバリア\nこわれても しばらく\nまてばかいふくする"
        },
        "element": "aqua",
        "codes": "IJQRW*",
        "mb": 36,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 161,
        "name": {
            "en": "LeafShld",
            "ja": "リーフシールド"
        },
        "description": {
            "en": "Next\nattack\nheals you",
            "ja": "いちどだけ くらった\nダメージをHPとして\nかいふくきゅうしゅう"
        },
        "element": "wood",
        "codes": "ADRSW*",
        "mb": 26,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 162,
        "name": {
            "en": "AquaAura",
            "ja": "アクアオーラ"
        },
        "description": {
            "en": "Repels\nattacks\nunder 10",
            "ja": "攻撃力が10より\nひくい攻撃をむこうか\n電気属性攻撃によわい"
        },
        "element": "aqua",
        "codes": "AIMQW*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 163,
        "name": {
            "en": "FireAura",
            "ja": "フレイムオーラ"
        },
        "description": {
            "en": "Repels\nattacks\nunder 40",
            "ja": "攻撃力が40より\nひくい攻撃をむこうか\n水属性攻撃によわい"
        },
        "element": "fire",
        "codes": "BFJNR*",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 164,
        "name": {
            "en": "WoodAura",
            "ja": "ウッドオーラ"
        },
        "description": {
            "en": "Repels\nattacks\nunder 80",
            "ja": "攻撃力が80より\nひくい攻撃をむこうか\n炎属性攻撃によわい"
        },
        "element": "wood",
        "codes": "CGJOS*",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 165,
        "name": {
            "en": "ElecAura",
            "ja": "エレキオーラ"
        },
        "description": {
            "en": "Repels non\nwd attacks\nunder 100",
            "ja": "攻撃力が100より\nひくい攻撃をむこうか\n木属性攻撃によわい"
        },
        "element": "elec",
        "codes": "DHLPT*",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 166,
        "name": {
            "en": "LifeAur1",
            "ja": "ドリームオーラ1"
        },
        "description": {
            "en": "Repels all\nattacks\nunder 100",
            "ja": "攻撃力が100より\nひくい攻撃をむこうか\nにがてな属性はなし"
        },
        "element": "null",
        "codes": "BGIOQ*",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 167,
        "name": {
            "en": "LifeAur2",
            "ja": "ドリームオーラ2"
        },
        "description": {
            "en": "Repels all\nattacks\nunder 150",
            "ja": "攻撃力が150より\nひくい攻撃をむこうか\nにがてな属性はなし"
        },
        "element": "null",
        "codes": "DFJNR*",
        "mb": 70,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 168,
        "name": {
            "en": "LifeAur3",
            "ja": "ドリームオーラ3"
        },
        "description": {
            "en": "Repels all\nattacks\nunder 200",
            "ja": "攻撃力が200より\nひくい攻撃をむこうか\nにがてな属性はなし"
        },
        "element": "null",
        "codes": "EHKMT*",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 169,
        "name": {
            "en": "MagLine",
            "ja": "マグネットライン"
        },
        "description": {
            "en": "Changes\nyour line\nto magnet",
            "ja": "じぶんのいるいちれつ\nをじしゃくパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "AEIMQ*",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 170,
        "name": {
            "en": "LavaLine",
            "ja": "マグマライン"
        },
        "description": {
            "en": "Changes\nyour line\nto lava",
            "ja": "じぶんのいるいちれつ\nをマグマパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "AFJMR*",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 171,
        "name": {
            "en": "IceLine",
            "ja": "アイスライン"
        },
        "description": {
            "en": "Changes\nyour line\nto ice",
            "ja": "じぶんのいるいちれつ\nをこおりパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "BEJNQ*",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 172,
        "name": {
            "en": "GrassLne",
            "ja": "クサムラライン"
        },
        "description": {
            "en": "Changes\nyour line\nto grass",
            "ja": "じぶんのいるいちれつ\nをくさむらパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "BFINR*",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 173,
        "name": {
            "en": "LavaStge",
            "ja": "マグマステージ"
        },
        "description": {
            "en": "Changes\nall panels\nto lava",
            "ja": "すべてのパネルを\nマグマパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "DHMUV*",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 174,
        "name": {
            "en": "IceStage",
            "ja": "アイスステージ"
        },
        "description": {
            "en": "Changes\nall panels\nto ice",
            "ja": "すべてのパネルを\nこおりパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "ACEIS*",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 175,
        "name": {
            "en": "GrassStg",
            "ja": "クサムラステージ"
        },
        "description": {
            "en": "Changes\nall panels\nto grass",
            "ja": "すべてのパネルを\nくさむらパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "BDHPR*",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 176,
        "name": {
            "en": "HolyPanl",
            "ja": "ホーリーパネル"
        },
        "description": {
            "en": "Makes all\npanels\nholy",
            "ja": "めのまえのマスを\nダメージをはんげん\nするホーリーパネルに"
        },
        "element": "null",
        "codes": "CEHLR*",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 177,
        "name": {
            "en": "Jealosy",
            "ja": "ジェラシー"
        },
        "description": {
            "en": "More chips\nmeans more\ndamage",
            "ja": "チップをもっている\nてきに チップの\nまいすうぶんダメージ"
        },
        "element": "null",
        "codes": "EJORU*",
        "mb": 22,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 178,
        "name": {
            "en": "AntiFire",
            "ja": "カキゲンキン"
        },
        "description": {
            "en": "Punishes\nenemy for\nusing fire",
            "ja": "てきにワナをはる\n炎属性攻撃をだすと\nきょうせいダメージ！"
        },
        "element": "fire",
        "codes": "FKLPT*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 179,
        "name": {
            "en": "AntiElec",
            "ja": "ヒライシン"
        },
        "description": {
            "en": "Punishes\nenemy for\nusing elec",
            "ja": "てきにワナをはる\n電気属性攻撃をだすと\nきょうせいダメージ！"
        },
        "element": "elec",
        "codes": "EHNUY*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 180,
        "name": {
            "en": "AntiWatr",
            "ja": "ダイコウズイ"
        },
        "description": {
            "en": "Punishes\nenemy for\nusing aqua",
            "ja": "てきにワナをはる\n水属性攻撃をだすと\nきょうせいダメージ！"
        },
        "element": "aqua",
        "codes": "ADQWZ*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 181,
        "name": {
            "en": "AntiDmg",
            "ja": "カワリミ"
        },
        "description": {
            "en": "Fake pain\nand throw\nshurikens!",
            "ja": "てきにワナをはる\n攻撃をうけたふりして\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "CJMRS*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 182,
        "name": {
            "en": "AntiSwrd",
            "ja": "シラハドリ"
        },
        "description": {
            "en": "Punishes\nuse of\nswords",
            "ja": "てきにワナをはる\nソード攻撃をうけると\nぎゃくにきりかえす！"
        },
        "element": "null",
        "codes": "DHIMT*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 183,
        "name": {
            "en": "AntiNavi",
            "ja": "ナビスカウト"
        },
        "description": {
            "en": "Take the\nenemy's\nNavi away",
            "ja": "てきにワナをはる\nよびだしたナビを\nこちらにねがえらせる"
        },
        "element": "null",
        "codes": "KLOTX*",
        "mb": 32,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 184,
        "name": {
            "en": "AntiRecv",
            "ja": "バッドメディスン"
        },
        "description": {
            "en": "Punish the\nrecovery\nof HPs!",
            "ja": "てきにワナをはる\nリカバリーをつかうと\nぎゃくにダメージに！"
        },
        "element": "null",
        "codes": "BDMPW",
        "mb": 32,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 185,
        "name": {
            "en": "Atk+10",
            "ja": "アタック+10"
        },
        "description": {
            "en": "+10 to\nselected\nAtkChip!",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+10できる"
        },
        "element": "null",
        "codes": "*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 188,
        "name": {
            "en": "Fire+40",
            "ja": "ファイア+40"
        },
        "description": {
            "en": "Adds 40 to\nFire\nAttackChip",
            "ja": "炎属性の攻撃チップの\nあとにえらぶと\n攻撃力を+40！"
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
        "index": 189,
        "name": {
            "en": "Aqua+40",
            "ja": "アクア+40"
        },
        "description": {
            "en": "Adds 40 to\nAqua\nAttackChip",
            "ja": "水属性の攻撃チップの\nあとにえらぶと\n攻撃力を+40！"
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
        "index": 190,
        "name": {
            "en": "Wood+40",
            "ja": "ウッド+40"
        },
        "description": {
            "en": "Adds 40 to\nWood\nAttackChip",
            "ja": "木属性の攻撃チップの\nあとにえらぶと\n攻撃力を+40！"
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
        "index": 191,
        "name": {
            "en": "Elec+40",
            "ja": "エレキ+40"
        },
        "description": {
            "en": "Adds 40 to\nElec\nAttackChip",
            "ja": "電気属性の攻撃チップ\nのあとにえらぶと\n攻撃力を+40！"
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
        "index": 192,
        "name": {
            "en": "Navi+20",
            "ja": "ナビ+20"
        },
        "description": {
            "en": "+20 to\nselected\nNaviChip!",
            "ja": "ナビチップのあとに\nえらぶと 攻撃力を\n+20！"
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
        "index": 194,
        "name": {
            "en": "Roll",
            "ja": "ロール"
        },
        "description": {
            "en": "Attacks 1\nenemy then\nheals you",
            "ja": "てき1たいを攻撃\nHPかいふくのハート\nでいやしてくれる"
        },
        "element": "null",
        "codes": "R*",
        "mb": 8,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 195,
        "name": {
            "en": "RollV2",
            "ja": "ロールV2"
        },
        "description": {
            "en": "Attacks 1\nenemy then\nheals you",
            "ja": "てき1たいを攻撃\nHPかいふくのハート\nでいやしてくれる"
        },
        "element": "null",
        "codes": "R*",
        "mb": 24,
        "version": null,
        "stars": 4,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 196,
        "name": {
            "en": "RollV3",
            "ja": "ロールV3"
        },
        "description": {
            "en": "Attacks 1\nenemy then\nheals you",
            "ja": "てき1たいを攻撃\nHPかいふくのハート\nでいやしてくれる"
        },
        "element": "null",
        "codes": "R*",
        "mb": 48,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 197,
        "name": {
            "en": "GutsMan",
            "ja": "ガッツマン"
        },
        "description": {
            "en": "Creeps and\nsmashes\npanels!",
            "ja": "前方に ちをはう\nしょうげきは攻撃！\nパネルはひびわれに！"
        },
        "element": "null",
        "codes": "G*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 198,
        "name": {
            "en": "GutsManV2",
            "ja": "ガッツマンV2"
        },
        "description": {
            "en": "Creeps and\nsmashes\npanels!",
            "ja": "前方に ちをはう\nしょうげきは攻撃！\nパネルはひびわれに！"
        },
        "element": "null",
        "codes": "G*",
        "mb": 48,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 199,
        "name": {
            "en": "GutsManV3",
            "ja": "ガッツマンV3"
        },
        "description": {
            "en": "Creeps and\nsmashes\npanels!",
            "ja": "前方に ちをはう\nしょうげきは攻撃！\nパネルはひびわれに！"
        },
        "element": "null",
        "codes": "G*",
        "mb": 64,
        "version": null,
        "stars": 5,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 200,
        "name": {
            "en": "ProtoMan",
            "ja": "ブルース"
        },
        "description": {
            "en": "Swings\nsword at\nenemy face",
            "ja": "てきの目の前にいって\nきりつけてまわる！\n前に行けないばあいも"
        },
        "element": "null",
        "codes": "B*",
        "mb": 52,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 201,
        "name": {
            "en": "ProtoMnV2",
            "ja": "ブルースV2"
        },
        "description": {
            "en": "Swings\nsword at\nenemy face",
            "ja": "てきの目の前にいって\nきりつけてまわる！\n前に行けないばあいも"
        },
        "element": "null",
        "codes": "B*",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 202,
        "name": {
            "en": "ProtoMnV3",
            "ja": "ブルースV3"
        },
        "description": {
            "en": "Swings\nsword at\nenemy face",
            "ja": "てきの目の前にいって\nきりつけてまわる！\n前に行けないばあいも"
        },
        "element": "null",
        "codes": "B*",
        "mb": 76,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 203,
        "name": {
            "en": "AirMan",
            "ja": "エアーマン"
        },
        "description": {
            "en": "Shoots air\ntwisters\nin a line",
            "ja": "目の前のたて1れつに\nエアシューター！\nちをはうかんつう攻撃"
        },
        "element": "null",
        "codes": "A*",
        "mb": 16,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 204,
        "name": {
            "en": "AirManV2",
            "ja": "エアーマンV2"
        },
        "description": {
            "en": "Shoots air\ntwisters\nin a line",
            "ja": "目の前のたて1れつに\nエアシューター！\nちをはうかんつう攻撃"
        },
        "element": "null",
        "codes": "A*",
        "mb": 34,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 205,
        "name": {
            "en": "AirManV3",
            "ja": "エアーマンV3"
        },
        "description": {
            "en": "Shoots air\ntwisters\nin a line",
            "ja": "目の前のたて1れつに\nエアシューター！\nちをはうかんつう攻撃"
        },
        "element": "null",
        "codes": "A*",
        "mb": 52,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 206,
        "name": {
            "en": "QuickMan",
            "ja": "クイックマン"
        },
        "description": {
            "en": "Boomerang\nattacks\nwhole row",
            "ja": "よこ1れつをおうふく\nするブーメラン攻撃！\nてきをかんつうする！"
        },
        "element": "null",
        "codes": "Q*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 207,
        "name": {
            "en": "QuickMnV2",
            "ja": "クイックマンV2"
        },
        "description": {
            "en": "Boomerang\nattacks\nwhole row",
            "ja": "よこ1れつをおうふく\nするブーメラン攻撃！\nてきをかんつうする！"
        },
        "element": "null",
        "codes": "Q*",
        "mb": 56,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 208,
        "name": {
            "en": "QuickMnV3",
            "ja": "クイックマンV3"
        },
        "description": {
            "en": "Boomerang\nattacks\nwhole row",
            "ja": "よこ1れつをおうふく\nするブーメラン攻撃！\nてきをかんつうする！"
        },
        "element": "null",
        "codes": "Q*",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 209,
        "name": {
            "en": "CutMan",
            "ja": "カットマン"
        },
        "description": {
            "en": "Scissor\nattacks\none square",
            "ja": "目の前の1マスに\nチョッキン攻撃！"
        },
        "element": "null",
        "codes": "C*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 210,
        "name": {
            "en": "CutManV2",
            "ja": "カットマンV2"
        },
        "description": {
            "en": "Scissor\nattacks\none square",
            "ja": "目の前の1マスに\nチョッキン攻撃！"
        },
        "element": "null",
        "codes": "C*",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 211,
        "name": {
            "en": "CutManV3",
            "ja": "カットマンV3"
        },
        "description": {
            "en": "Scissor\nattacks\none square",
            "ja": "目の前の1マスに\nチョッキン攻撃！"
        },
        "element": "null",
        "codes": "C*",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 300,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 212,
        "name": {
            "en": "ShadoMan",
            "ja": "シャドーマン"
        },
        "description": {
            "en": "Splits and\nshoots 3\nshurikens!",
            "ja": "ぶんしんしてトリプル\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "S*",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 213,
        "name": {
            "en": "ShadoMnV2",
            "ja": "シャドーマンV2"
        },
        "description": {
            "en": "Splits and\nshoots 3\nshurikens!",
            "ja": "ぶんしんしてトリプル\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "S*",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 214,
        "name": {
            "en": "ShadoMnV3",
            "ja": "シャドーマンV3"
        },
        "description": {
            "en": "Splits and\nshoots 3\nshurikens!",
            "ja": "ぶんしんしてトリプル\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "S*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 215,
        "name": {
            "en": "KnightMn",
            "ja": "ナイトマン"
        },
        "description": {
            "en": "Smashes\nenemies\nin circle!",
            "ja": "じぶんのまわりを\n1かいてんする\nてっきゅう攻撃！"
        },
        "element": "null",
        "codes": "K*",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 216,
        "name": {
            "en": "KnghtMnV2",
            "ja": "ナイトマンV2"
        },
        "description": {
            "en": "Smashes\nenemies\nin circle!",
            "ja": "じぶんのまわりを\n1かいてんする\nてっきゅう攻撃！"
        },
        "element": "null",
        "codes": "K*",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": 210,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 217,
        "name": {
            "en": "KnghtMnV3",
            "ja": "ナイトマンV3"
        },
        "description": {
            "en": "Smashes\nenemies\nin circle!",
            "ja": "じぶんのまわりを\n1かいてんする\nてっきゅう攻撃！"
        },
        "element": "null",
        "codes": "K*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 260,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 218,
        "name": {
            "en": "MagnetMn",
            "ja": "マグネットマン"
        },
        "description": {
            "en": "Bipolar\ntackle on\n1 enemy",
            "ja": "前方のてき1たいに\nひっさつNSタックル"
        },
        "element": "elec",
        "codes": "M*",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 219,
        "name": {
            "en": "MagntMnV2",
            "ja": "マグネットマンV2"
        },
        "description": {
            "en": "Bipolar\ntackle on\n1 enemy",
            "ja": "前方のてき1たいに\nひっさつNSタックル"
        },
        "element": "elec",
        "codes": "M*",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 220,
        "name": {
            "en": "MagntMnV3",
            "ja": "マグネットマンV3"
        },
        "description": {
            "en": "Bipolar\ntackle on\n1 enemy",
            "ja": "前方のてき1たいに\nひっさつNSタックル"
        },
        "element": "elec",
        "codes": "M*",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 221,
        "name": {
            "en": "FreezeMn",
            "ja": "フリーズマン"
        },
        "description": {
            "en": "Rains\nicicles on\nenemies",
            "ja": "てきのいるあたりに\nツララのあめをふらす"
        },
        "element": "aqua",
        "codes": "F*",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 222,
        "name": {
            "en": "FrzManV2",
            "ja": "フリーズマンV2"
        },
        "description": {
            "en": "Rains\nicicles on\nenemies",
            "ja": "てきのいるあたりに\nツララのあめをふらす"
        },
        "element": "aqua",
        "codes": "F*",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 223,
        "name": {
            "en": "FrzManV3",
            "ja": "フリーズマンV3"
        },
        "description": {
            "en": "Rains\nicicles on\nenemies",
            "ja": "てきのいるあたりに\nツララのあめをふらす"
        },
        "element": "aqua",
        "codes": "F*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 224,
        "name": {
            "en": "HeatMan",
            "ja": "ヒートマン"
        },
        "description": {
            "en": "Flame\nattack!\nRange is 3",
            "ja": "ほうしゃじょうに\nひろがる炎攻撃！\nしゃていは3マス"
        },
        "element": "fire",
        "codes": "H*",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 225,
        "name": {
            "en": "HeatManV2",
            "ja": "ヒートマンV2"
        },
        "description": {
            "en": "Flame\nattack!\nRange is 3",
            "ja": "ほうしゃじょうに\nひろがる炎攻撃！\nしゃていは3マス"
        },
        "element": "fire",
        "codes": "H*",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 226,
        "name": {
            "en": "HeatManV3",
            "ja": "ヒートマンV3"
        },
        "description": {
            "en": "Flame\nattack!\nRange is 3",
            "ja": "ほうしゃじょうに\nひろがる炎攻撃！\nしゃていは3マス"
        },
        "element": "fire",
        "codes": "H*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 227,
        "name": {
            "en": "ToadMan",
            "ja": "トードマン"
        },
        "description": {
            "en": "Shocking\nmelody\nparalyzes!",
            "ja": "てきをついびする\nショッキングメロディー\nあたるとマヒこうか！"
        },
        "element": "elec",
        "codes": "T*",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 228,
        "name": {
            "en": "ToadManV2",
            "ja": "トードマンV2"
        },
        "description": {
            "en": "Shocking\nmelody\nparalyzes!",
            "ja": "てきをついびする\nショッキングメロディー\nあたるとマヒこうか！"
        },
        "element": "elec",
        "codes": "T*",
        "mb": 48,
        "version": null,
        "stars": 4,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 229,
        "name": {
            "en": "ToadManV3",
            "ja": "トードマンV3"
        },
        "description": {
            "en": "Shocking\nmelody\nparalyzes!",
            "ja": "てきをついびする\nショッキングメロディー\nあたるとマヒこうか！"
        },
        "element": "elec",
        "codes": "T*",
        "mb": 68,
        "version": null,
        "stars": 5,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 230,
        "name": {
            "en": "ThunMan",
            "ja": "サンダーマン"
        },
        "description": {
            "en": "Thunder\nattacks\n3rd line",
            "ja": "3マス前の\nたていちれつに\nサンダー攻撃！"
        },
        "element": "elec",
        "codes": "T*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 231,
        "name": {
            "en": "ThunManV2",
            "ja": "サンダーマンV2"
        },
        "description": {
            "en": "Thunder\nattacks\n3rd line",
            "ja": "3マス前の\nたていちれつに\nサンダー攻撃！"
        },
        "element": "elec",
        "codes": "T*",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 232,
        "name": {
            "en": "ThunManV3",
            "ja": "サンダーマンV3"
        },
        "description": {
            "en": "Thunder\nattacks\n3rd line",
            "ja": "3マス前の\nたていちれつに\nサンダー攻撃！"
        },
        "element": "elec",
        "codes": "T*",
        "mb": 90,
        "version": null,
        "stars": 5,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 233,
        "name": {
            "en": "SnakeMan",
            "ja": "スネークマン"
        },
        "description": {
            "en": "Main\nattack and\nsnakes!",
            "ja": "ほんたいの攻撃プラス\nパネルのないマスから\nスネークアロー攻撃！"
        },
        "element": "wood",
        "codes": "S*",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 234,
        "name": {
            "en": "SnakeMnV2",
            "ja": "スネークマンV2"
        },
        "description": {
            "en": "Main\nattack and\nsnakes!",
            "ja": "ほんたいの攻撃プラス\nパネルのないマスから\nスネークアロー攻撃！"
        },
        "element": "wood",
        "codes": "S*",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 235,
        "name": {
            "en": "SnakeMnV3",
            "ja": "スネークマンV3"
        },
        "description": {
            "en": "Main\nattack and\nsnakes!",
            "ja": "ほんたいの攻撃プラス\nパネルのないマスから\nスネークアロー攻撃！"
        },
        "element": "wood",
        "codes": "S*",
        "mb": 75,
        "version": null,
        "stars": 5,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 236,
        "name": {
            "en": "GateMan",
            "ja": "ゲートマン"
        },
        "description": {
            "en": "3 soldiers\ncharge\nforward!",
            "ja": "3にんのソルジャーが\nちょくしんして\nたいあたり！"
        },
        "element": "null",
        "codes": "G*",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 237,
        "name": {
            "en": "GateManV2",
            "ja": "ゲートマンV2"
        },
        "description": {
            "en": "4 soldiers\ncharge\nforward!",
            "ja": "4にんのソルジャーが\nちょくしんして\nたいあたり！"
        },
        "element": "null",
        "codes": "G*",
        "mb": 40,
        "version": null,
        "stars": 4,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 238,
        "name": {
            "en": "GateManV3",
            "ja": "ゲートマンV3"
        },
        "description": {
            "en": "5 soldiers\ncharge\nforward!",
            "ja": "5にんのソルジャーが\nちょくしんして\nたいあたり！"
        },
        "element": "null",
        "codes": "G*",
        "mb": 56,
        "version": null,
        "stars": 5,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 245,
        "name": {
            "en": "PlanetMn",
            "ja": "プラネットマン"
        },
        "description": {
            "en": "Planet\nsmashes 1\nenemy!",
            "ja": "てき1たいのまわりに\nわくせいがハッセイし\nとっしんする！"
        },
        "element": "wood",
        "codes": "P*",
        "mb": 64,
        "version": null,
        "stars": 5,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 246,
        "name": {
            "en": "PlnetMnV2",
            "ja": "プラネットマンV2"
        },
        "description": {
            "en": "Planet\nsmashes 1\nenemy!",
            "ja": "てき1たいのまわりに\nわくせいがハッセイし\nとっしんする！"
        },
        "element": "wood",
        "codes": "P*",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 247,
        "name": {
            "en": "PlnetMnV3",
            "ja": "プラネットマンV3"
        },
        "description": {
            "en": "Planet\nsmashes 1\nenemy!",
            "ja": "てき1たいのまわりに\nわくせいがハッセイし\nとっしんする！"
        },
        "element": "wood",
        "codes": "P*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 242,
        "name": {
            "en": "NapalmMn",
            "ja": "ナパームマン"
        },
        "description": {
            "en": "Bombs that\neven break\npanels!",
            "ja": "パネルをもはかいする\nばくだんで 前方を\nむさべつばくげき！"
        },
        "element": "fire",
        "codes": "N*",
        "mb": 48,
        "version": null,
        "stars": 5,
        "damage": 220,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 243,
        "name": {
            "en": "NaplmMnV2",
            "ja": "ナパームマンV2"
        },
        "description": {
            "en": "Bombs that\neven break\npanels!",
            "ja": "パネルをもはかいする\nばくだんで 前方を\nむさべつばくげき！"
        },
        "element": "fire",
        "codes": "N*",
        "mb": 64,
        "version": null,
        "stars": 5,
        "damage": 240,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 244,
        "name": {
            "en": "NaplmMnV3",
            "ja": "ナパームマンV3"
        },
        "description": {
            "en": "Bombs that\neven break\npanels!",
            "ja": "パネルをもはかいする\nばくだんで 前方を\nむさべつばくげき！"
        },
        "element": "fire",
        "codes": "N*",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 260,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 239,
        "name": {
            "en": "PharoMan",
            "ja": "ファラオマン"
        },
        "description": {
            "en": "Laser-\nshooting\ncoffin etc",
            "ja": "カンオケからかんつう\nレーザー！たまにべつ\nのものがでるときも"
        },
        "element": "null",
        "codes": "P*",
        "mb": 32,
        "version": null,
        "stars": 5,
        "damage": 240,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 240,
        "name": {
            "en": "PharoMnV2",
            "ja": "ファラオマンV2"
        },
        "description": {
            "en": "Laser-\nshooting\ncoffin etc",
            "ja": "カンオケからかんつう\nレーザー！たまにべつ\nのものがでるときも"
        },
        "element": "null",
        "codes": "P*",
        "mb": 48,
        "version": null,
        "stars": 5,
        "damage": 270,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 241,
        "name": {
            "en": "PharoMnV3",
            "ja": "ファラオマンV3"
        },
        "description": {
            "en": "Laser-\nshooting\ncoffin etc",
            "ja": "カンオケからかんつう\nレーザー！たまにべつ\nのものがでるときも"
        },
        "element": "null",
        "codes": "P*",
        "mb": 64,
        "version": null,
        "stars": 5,
        "damage": 300,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 248,
        "name": {
            "en": "Bass",
            "ja": "フォルテ"
        },
        "description": {
            "en": "Air-burst\nattack on\nall lines!",
            "ja": "すべてのれつに\nちょうれんしゃの\nエアバースト攻撃！"
        },
        "element": "null",
        "codes": "F*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 249,
        "name": {
            "en": "BassV2",
            "ja": "フォルテV2"
        },
        "description": {
            "en": "Air-burst\nattack on\nall lines!",
            "ja": "すべてのれつに\nちょうれんしゃの\nエアバースト攻撃！"
        },
        "element": "null",
        "codes": "F*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 250,
        "name": {
            "en": "BassV3",
            "ja": "フォルテV3"
        },
        "description": {
            "en": "Air-burst\nattack on\nall lines!",
            "ja": "すべてのれつに\nちょうれんしゃの\nエアバースト攻撃！"
        },
        "element": "null",
        "codes": "X*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 251,
        "name": {
            "en": "BgRedWav",
            "ja": "オオアカツナミ"
        },
        "description": {
            "en": "Heat chip\nCreates a\nlava wave!",
            "ja": "ヒートせんようチップ\n3れつにすすむ\nようがんツナミ攻撃！"
        },
        "element": "fire",
        "codes": "FHPRS*",
        "mb": 64,
        "version": null,
        "stars": 5,
        "damage": 220,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 252,
        "name": {
            "en": "FreezBom",
            "ja": "フリーズボム"
        },
        "description": {
            "en": "Aqua chip\nTosses ice\nbomb!",
            "ja": "アクアせんようチップ\n3マス前にてきをこお\nらせるボムをなげる！"
        },
        "element": "aqua",
        "codes": "AIJQU*",
        "mb": 56,
        "version": null,
        "stars": 5,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 253,
        "name": {
            "en": "Sparker",
            "ja": "チャージスパーク"
        },
        "description": {
            "en": "Elec chip\nA Button\nto spark!",
            "ja": "エレキせんようチップ\nAをおしつづけてHP\nをスパークさせ攻撃！"
        },
        "element": "elec",
        "codes": "CEGKV*",
        "mb": 48,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 254,
        "name": {
            "en": "GaiaSwrd",
            "ja": "ガイアソード"
        },
        "description": {
            "en": "Wood chip\nSteals atk\nfrom chip!",
            "ja": "ウッドせんようチップ\nあとにえらんだチップ\nの攻撃力をすいとる！"
        },
        "element": "wood",
        "codes": "DLNWY*",
        "mb": 72,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 255,
        "name": {
            "en": "BlkBomb",
            "ja": "ブラックボム"
        },
        "description": {
            "en": "Exploding\nfirebomb\nattack!",
            "ja": "炎攻撃でバクハツする\nふはつだんを3マス前\nになげる！"
        },
        "element": "fire",
        "codes": "BFGPR*",
        "mb": 64,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 256,
        "name": {
            "en": "FtrSword",
            "ja": "ファイターソード"
        },
        "description": {
            "en": "Normal\nsword. 3\nspaces fwd",
            "ja": "ノーマルせんよう\n3マス前までとどく\nでんせつのソード！"
        },
        "element": "null",
        "codes": "AILSY*",
        "mb": 50,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 257,
        "name": {
            "en": "KngtSwrd",
            "ja": "ナイトソード"
        },
        "description": {
            "en": "Normal\nsword. 3\nspaces fwd",
            "ja": "ノーマルせんよう\n3マス前までとどく\nでんせつのソード！"
        },
        "element": "null",
        "codes": "FJKMQ*",
        "mb": 64,
        "version": null,
        "stars": 5,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 258,
        "name": {
            "en": "HeroSwrd",
            "ja": "パラディンソード"
        },
        "description": {
            "en": "Normal\nsword. 3\nspaces fwd",
            "ja": "ノーマルせんよう\n3マス前までとどく\nでんせつのソード！"
        },
        "element": "null",
        "codes": "ENOTZ*",
        "mb": 90,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 259,
        "name": {
            "en": "Meteors",
            "ja": "リュウセイグン"
        },
        "description": {
            "en": "Shooting\nstars shot\nat enemy!",
            "ja": "てきエリアに\nむすうのりゅうせいが\nふりそそぐ！"
        },
        "element": "fire",
        "codes": "BHORV*",
        "mb": 68,
        "version": null,
        "stars": 5,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 260,
        "name": {
            "en": "Poltrgst",
            "ja": "ポルターガイスト"
        },
        "description": {
            "en": "Items are\nthrown at\nthe enemy!",
            "ja": "てきいがいのものが\nまいあがり てきに\nとつげきする！"
        },
        "element": "null",
        "codes": "EPRUW*",
        "mb": 50,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 262,
        "name": {
            "en": "FireGspl",
            "ja": "ファイアゴスペル"
        },
        "description": {
            "en": "Gospel's\nbreath of\nfire!",
            "ja": "ブレスオブゴスペル！\n炎のブレスがてきを\nやきつくす！"
        },
        "element": "fire",
        "codes": "X*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 600,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 263,
        "name": {
            "en": "AquaGspl",
            "ja": "アクアゴスペル"
        },
        "description": {
            "en": "Gospel's\nbreath of\nwater!",
            "ja": "ブレスオブゴスペル！\n水のブレスがてきを\nこごえさせる！"
        },
        "element": "aqua",
        "codes": "X*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 600,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 264,
        "name": {
            "en": "ElecGspl",
            "ja": "エレキゴスペル"
        },
        "description": {
            "en": "Gospel's\nelectric\nbreath!",
            "ja": "ブレスオブゴスペル！\n電気のブレスがてきを\nかんでんさせる！"
        },
        "element": "elec",
        "codes": "X*",
        "mb": 96,
        "version": null,
        "stars": 5,
        "damage": 600,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 265,
        "name": {
            "en": "WoodGspl",
            "ja": "ウッドゴスペル"
        },
        "description": {
            "en": "Breath of\nwood that\nslices!",
            "ja": "ブレスオブゴスペル！\nこのはのブレスが\nてきを きりきざむ！"
        },
        "element": "wood",
        "codes": "X*",
        "mb": 50,
        "version": null,
        "stars": 5,
        "damage": 600,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 261,
        "name": {
            "en": "GateSP",
            "ja": "ゲートマンSP"
        },
        "description": {
            "en": "Cannon of\nanother\ndimension!",
            "ja": "前方のてき1たいに\nいじげんへいき\nゲートキャノン！"
        },
        "element": "null",
        "codes": "G*",
        "mb": 50,
        "version": null,
        "stars": 5,
        "damage": 300,
        "class": "standard"
    },
    null,
    null,
    null,
    null,
    {
        "section": "standard",
        "index": 266,
        "name": {
            "en": "Snctuary",
            "ja": "サンクチュアリ"
        },
        "description": {
            "en": "Turns your\npanels\nholy!",
            "ja": "じぶんのエリアマスが\nすべてホーリーパネル\nになる！"
        },
        "element": "null",
        "codes": "ACELS*",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    null,
    {
        "section": "pa",
        "index": 1,
        "name": {
            "en": "Z-Canon1",
            "ja": "ゼータキャノン1"
        },
        "description": {
            "en": "5-second\ninvisible\ncannon",
            "ja": "5びょうかん\nインビジブルになって\nキャノン撃ちほうだい"
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
            ],
            [
                {
                    "id": 1,
                    "variant": 1
                },
                {
                    "id": 1,
                    "variant": 2
                },
                {
                    "id": 1,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 1,
                    "variant": 2
                },
                {
                    "id": 1,
                    "variant": 3
                },
                {
                    "id": 1,
                    "variant": 4
                }
            ]
        ],
        "damage": 40
    },
    {
        "section": "pa",
        "index": 2,
        "name": {
            "en": "Z-Canon2",
            "ja": "ゼータキャノン2"
        },
        "description": {
            "en": "5-second\ninvisible\ncannon",
            "ja": "5びょうかん\nインビジブルになって\nキャノン撃ちほうだい"
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
            ],
            [
                {
                    "id": 2,
                    "variant": 1
                },
                {
                    "id": 2,
                    "variant": 2
                },
                {
                    "id": 2,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 2,
                    "variant": 2
                },
                {
                    "id": 2,
                    "variant": 3
                },
                {
                    "id": 2,
                    "variant": 4
                }
            ]
        ],
        "damage": 60
    },
    {
        "section": "pa",
        "index": 3,
        "name": {
            "en": "Z-Canon3",
            "ja": "ゼータキャノン3"
        },
        "description": {
            "en": "5-second\ninvisible\ncannon",
            "ja": "5びょうかん\nインビジブルになって\nキャノン撃ちほうだい"
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
            ],
            [
                {
                    "id": 3,
                    "variant": 1
                },
                {
                    "id": 3,
                    "variant": 2
                },
                {
                    "id": 3,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 3,
                    "variant": 2
                },
                {
                    "id": 3,
                    "variant": 3
                },
                {
                    "id": 3,
                    "variant": 4
                }
            ]
        ],
        "damage": 80
    },
    {
        "section": "pa",
        "index": 4,
        "name": {
            "en": "H-Burst",
            "ja": "ハイパーバースト"
        },
        "description": {
            "en": "Powerful\nexploding\nshots",
            "ja": "ヒットすると\nバクハツがひろがる\nきょうれつなショット"
        },
        "pa": [
            [
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 7,
                    "variant": 1
                },
                {
                    "id": 7,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 7,
                    "variant": 1
                },
                {
                    "id": 7,
                    "variant": 2
                },
                {
                    "id": 7,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 7,
                    "variant": 2
                },
                {
                    "id": 7,
                    "variant": 3
                },
                {
                    "id": 7,
                    "variant": 4
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 5,
        "name": {
            "en": "Z-Ball",
            "ja": "ゼータホウガン"
        },
        "description": {
            "en": "5-second\ninvisible\ncannonball",
            "ja": "5びょうかん\nインビジブルになって\nホウガンなげほうだい"
        },
        "pa": [
            [
                {
                    "id": 52,
                    "variant": 0
                },
                {
                    "id": 52,
                    "variant": 1
                },
                {
                    "id": 52,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 52,
                    "variant": 1
                },
                {
                    "id": 52,
                    "variant": 2
                },
                {
                    "id": 52,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 52,
                    "variant": 2
                },
                {
                    "id": 52,
                    "variant": 3
                },
                {
                    "id": 52,
                    "variant": 4
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 6,
        "name": {
            "en": "Z-Raton1",
            "ja": "ゼータラットン1"
        },
        "description": {
            "en": "5-second\ninvisible\nRatton",
            "ja": "5びょうかん\nインビジブルになって\nラットン撃ちほうだい"
        },
        "pa": [
            [
                {
                    "id": 57,
                    "variant": 0
                },
                {
                    "id": 57,
                    "variant": 1
                },
                {
                    "id": 57,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 57,
                    "variant": 1
                },
                {
                    "id": 57,
                    "variant": 2
                },
                {
                    "id": 57,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 57,
                    "variant": 2
                },
                {
                    "id": 57,
                    "variant": 3
                },
                {
                    "id": 57,
                    "variant": 4
                }
            ]
        ],
        "damage": 70
    },
    {
        "section": "pa",
        "index": 7,
        "name": {
            "en": "Z-Raton2",
            "ja": "ゼータラットン2"
        },
        "description": {
            "en": "5-second\ninvisible\nRatton",
            "ja": "5びょうかん\nインビジブルになって\nラットン撃ちほうだい"
        },
        "pa": [
            [
                {
                    "id": 58,
                    "variant": 0
                },
                {
                    "id": 58,
                    "variant": 1
                },
                {
                    "id": 58,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 58,
                    "variant": 1
                },
                {
                    "id": 58,
                    "variant": 2
                },
                {
                    "id": 58,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 58,
                    "variant": 2
                },
                {
                    "id": 58,
                    "variant": 3
                },
                {
                    "id": 58,
                    "variant": 4
                }
            ]
        ],
        "damage": 80
    },
    {
        "section": "pa",
        "index": 8,
        "name": {
            "en": "Z-Raton3",
            "ja": "ゼータラットン3"
        },
        "description": {
            "en": "5-second\ninvisible\nRatton",
            "ja": "5びょうかん\nインビジブルになって\nラットン撃ちほうだい"
        },
        "pa": [
            [
                {
                    "id": 59,
                    "variant": 0
                },
                {
                    "id": 59,
                    "variant": 1
                },
                {
                    "id": 59,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 59,
                    "variant": 1
                },
                {
                    "id": 59,
                    "variant": 2
                },
                {
                    "id": 59,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 59,
                    "variant": 2
                },
                {
                    "id": 59,
                    "variant": 3
                },
                {
                    "id": 59,
                    "variant": 4
                }
            ]
        ],
        "damage": 90
    },
    {
        "section": "pa",
        "index": 9,
        "name": {
            "en": "O-Canon1",
            "ja": "オメガキャノン1"
        },
        "description": {
            "en": "10-second\ninvisible\ncannon",
            "ja": "10びょうかん\nインビジブルになって\nキャノン撃ちほうだい"
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
                },
                {
                    "id": 1,
                    "variant": 3
                },
                {
                    "id": 1,
                    "variant": 4
                }
            ]
        ],
        "damage": 40
    },
    {
        "section": "pa",
        "index": 10,
        "name": {
            "en": "O-Canon2",
            "ja": "オメガキャノン2"
        },
        "description": {
            "en": "10-second\ninvisible\ncannon",
            "ja": "10びょうかん\nインビジブルになって\nキャノン撃ちほうだい"
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
                },
                {
                    "id": 2,
                    "variant": 3
                },
                {
                    "id": 2,
                    "variant": 4
                }
            ]
        ],
        "damage": 80
    },
    {
        "section": "pa",
        "index": 11,
        "name": {
            "en": "O-Canon3",
            "ja": "オメガキャノン3"
        },
        "description": {
            "en": "10-second\ninvisible\ncannon",
            "ja": "10びょうかん\nインビジブルになって\nキャノン撃ちほうだい"
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
                },
                {
                    "id": 3,
                    "variant": 3
                },
                {
                    "id": 3,
                    "variant": 4
                }
            ]
        ],
        "damage": 120
    },
    {
        "section": "pa",
        "index": 12,
        "name": {
            "en": "M-Burst",
            "ja": "メガデスバースト"
        },
        "description": {
            "en": "Powerful\nexploding\nshots",
            "ja": "ヒットすると\nバクハツがひろがる\nきょうれつなショット"
        },
        "pa": [
            [
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 7,
                    "variant": 1
                },
                {
                    "id": 7,
                    "variant": 2
                },
                {
                    "id": 7,
                    "variant": 3
                },
                {
                    "id": 7,
                    "variant": 4
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 13,
        "name": {
            "en": "O-Ball",
            "ja": "オメガホウガン"
        },
        "description": {
            "en": "10-second\ninvisible\ncannonball",
            "ja": "10びょうかん\nインビジブルになって\nホウガンなげほうだい"
        },
        "pa": [
            [
                {
                    "id": 52,
                    "variant": 0
                },
                {
                    "id": 52,
                    "variant": 1
                },
                {
                    "id": 52,
                    "variant": 2
                },
                {
                    "id": 52,
                    "variant": 3
                },
                {
                    "id": 52,
                    "variant": 4
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 14,
        "name": {
            "en": "O-Raton1",
            "ja": "オメガラットン1"
        },
        "description": {
            "en": "10-second\ninvisible\nRatton",
            "ja": "10びょうかん\nインビジブルになって\nラットン撃ちほうだい"
        },
        "pa": [
            [
                {
                    "id": 57,
                    "variant": 0
                },
                {
                    "id": 57,
                    "variant": 1
                },
                {
                    "id": 57,
                    "variant": 2
                },
                {
                    "id": 57,
                    "variant": 3
                },
                {
                    "id": 57,
                    "variant": 4
                }
            ]
        ],
        "damage": 70
    },
    {
        "section": "pa",
        "index": 15,
        "name": {
            "en": "O-Raton2",
            "ja": "オメガラットン2"
        },
        "description": {
            "en": "10-second\ninvisible\nRatton",
            "ja": "10びょうかん\nインビジブルになって\nラットン撃ちほうだい"
        },
        "pa": [
            [
                {
                    "id": 58,
                    "variant": 0
                },
                {
                    "id": 58,
                    "variant": 1
                },
                {
                    "id": 58,
                    "variant": 2
                },
                {
                    "id": 58,
                    "variant": 3
                },
                {
                    "id": 58,
                    "variant": 4
                }
            ]
        ],
        "damage": 80
    },
    {
        "section": "pa",
        "index": 16,
        "name": {
            "en": "O-Raton3",
            "ja": "オメガラットン3"
        },
        "description": {
            "en": "10-second\ninvisible\nRatton",
            "ja": "10びょうかん\nインビジブルになって\nラットン撃ちほうだい"
        },
        "pa": [
            [
                {
                    "id": 59,
                    "variant": 0
                },
                {
                    "id": 59,
                    "variant": 1
                },
                {
                    "id": 59,
                    "variant": 2
                },
                {
                    "id": 59,
                    "variant": 3
                },
                {
                    "id": 59,
                    "variant": 4
                }
            ]
        ],
        "damage": 90
    },
    {
        "section": "pa",
        "index": 17,
        "name": {
            "en": "Arrows",
            "ja": "ストリームアロー"
        },
        "description": {
            "en": "Fires off\n10 arrows\nof rage!",
            "ja": "10れんしゃの\nどとうのアロー攻撃！"
        },
        "pa": [
            [
                {
                    "id": 53,
                    "variant": 1
                },
                {
                    "id": 54,
                    "variant": 0
                },
                {
                    "id": 55,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 53,
                    "variant": 3
                },
                {
                    "id": 54,
                    "variant": 1
                },
                {
                    "id": 55,
                    "variant": 2
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 18,
        "name": {
            "en": "UltraBmb",
            "ja": "グレイテストボム"
        },
        "description": {
            "en": "Strongest\nbomb hits\n9 panels!",
            "ja": "さいきょうのボム！\n9マスにひろがり\nパネルにひび！"
        },
        "pa": [
            [
                {
                    "id": 17,
                    "variant": 2
                },
                {
                    "id": 18,
                    "variant": 2
                },
                {
                    "id": 19,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 17,
                    "variant": 3
                },
                {
                    "id": 18,
                    "variant": 3
                },
                {
                    "id": 19,
                    "variant": 1
                }
            ],
            [
                {
                    "id": 17,
                    "variant": 4
                },
                {
                    "id": 18,
                    "variant": 4
                },
                {
                    "id": 19,
                    "variant": 2
                }
            ]
        ],
        "damage": 400
    },
    {
        "section": "pa",
        "index": 19,
        "name": {
            "en": "LifeSrd1",
            "ja": "ドリームソード1"
        },
        "description": {
            "en": "Gigantic\n2 by 3\nsword!",
            "ja": "よこ2マス\nたて3マスの\nきょだいソード！"
        },
        "pa": [
            [
                {
                    "id": 23,
                    "variant": 0
                },
                {
                    "id": 24,
                    "variant": 0
                },
                {
                    "id": 25,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 23,
                    "variant": 2
                },
                {
                    "id": 24,
                    "variant": 2
                },
                {
                    "id": 25,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                },
                {
                    "id": 25,
                    "variant": 4
                }
            ]
        ],
        "damage": 400
    },
    {
        "section": "pa",
        "index": 20,
        "name": {
            "en": "LifeSrd2",
            "ja": "ドリームソード2"
        },
        "description": {
            "en": "Gigantic\n2 by 3\nsword!",
            "ja": "よこ2マス\nたて3マスの\nきょだいソード！"
        },
        "pa": [
            [
                {
                    "id": 26,
                    "variant": 1
                },
                {
                    "id": 27,
                    "variant": 1
                },
                {
                    "id": 28,
                    "variant": 1
                }
            ],
            [
                {
                    "id": 26,
                    "variant": 2
                },
                {
                    "id": 27,
                    "variant": 2
                },
                {
                    "id": 28,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 26,
                    "variant": 3
                },
                {
                    "id": 27,
                    "variant": 3
                },
                {
                    "id": 28,
                    "variant": 3
                }
            ]
        ],
        "damage": 500
    },
    {
        "section": "pa",
        "index": 21,
        "name": {
            "en": "LifeSrd3",
            "ja": "ドリームソード3"
        },
        "description": {
            "en": "Gigantic\n2 by 3\nsword!",
            "ja": "よこ2マス\nたて3マスの\nきょだいソード！"
        },
        "pa": [
            [
                {
                    "id": 29,
                    "variant": 0
                },
                {
                    "id": 30,
                    "variant": 1
                },
                {
                    "id": 31,
                    "variant": 1
                }
            ],
            [
                {
                    "id": 29,
                    "variant": 3
                },
                {
                    "id": 30,
                    "variant": 3
                },
                {
                    "id": 31,
                    "variant": 4
                }
            ]
        ],
        "damage": 600
    },
    {
        "section": "pa",
        "index": 22,
        "name": {
            "en": "Punch",
            "ja": "マシンガンパンチ"
        },
        "description": {
            "en": "Punch like\na machine-\ngun!",
            "ja": "前方にパンチを\nマシンガンのように\nれんしゃ！"
        },
        "pa": [
            [
                {
                    "id": 45,
                    "variant": 0
                },
                {
                    "id": 46,
                    "variant": 0
                },
                {
                    "id": 50,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 45,
                    "variant": 1
                },
                {
                    "id": 46,
                    "variant": 1
                },
                {
                    "id": 50,
                    "variant": 1
                }
            ]
        ],
        "damage": 80
    },
    {
        "section": "pa",
        "index": 23,
        "name": {
            "en": "Curse",
            "ja": "カースアンガー"
        },
        "description": {
            "en": "3-line\ncurse\nshield!",
            "ja": "てきの攻撃をガード\nすると 3れつに\nカースシールド！"
        },
        "pa": [
            [
                {
                    "id": 85,
                    "variant": 0
                },
                {
                    "id": 86,
                    "variant": 0
                },
                {
                    "id": 87,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 85,
                    "variant": 1
                },
                {
                    "id": 86,
                    "variant": 1
                },
                {
                    "id": 87,
                    "variant": 1
                }
            ],
            [
                {
                    "id": 85,
                    "variant": 2
                },
                {
                    "id": 86,
                    "variant": 2
                },
                {
                    "id": 87,
                    "variant": 2
                }
            ]
        ],
        "damage": 500
    },
    {
        "section": "pa",
        "index": 24,
        "name": {
            "en": "TimeBom+",
            "ja": "ギガカウントボム"
        },
        "description": {
            "en": "Gigantic\ntime bomb!",
            "ja": "きょだいカウントボム\nカウント0になると\nエリア中に大バクハツ"
        },
        "pa": [
            [
                {
                    "id": 88,
                    "variant": 1
                },
                {
                    "id": 89,
                    "variant": 1
                },
                {
                    "id": 90,
                    "variant": 1
                }
            ],
            [
                {
                    "id": 88,
                    "variant": 2
                },
                {
                    "id": 89,
                    "variant": 2
                },
                {
                    "id": 90,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 88,
                    "variant": 4
                },
                {
                    "id": 89,
                    "variant": 4
                },
                {
                    "id": 90,
                    "variant": 4
                }
            ]
        ],
        "damage": 500
    },
    {
        "section": "pa",
        "index": 25,
        "name": {
            "en": "HvyStamp",
            "ja": "ヘビースタンプ"
        },
        "description": {
            "en": "Stomps on\n1 enemy!",
            "ja": "テキ1たいに\nヘビーきゅうの\nふみつけ攻撃！"
        },
        "pa": [
            [
                {
                    "id": 42,
                    "variant": 3
                },
                {
                    "id": 43,
                    "variant": 3
                },
                {
                    "id": 44,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 42,
                    "variant": 4
                },
                {
                    "id": 43,
                    "variant": 4
                },
                {
                    "id": 44,
                    "variant": 4
                }
            ]
        ],
        "damage": 800
    },
    {
        "section": "pa",
        "index": 26,
        "name": {
            "en": "PoisPhar",
            "ja": "ポイズンファラオ"
        },
        "description": {
            "en": "Pharaoh's\nstronger\npoison",
            "ja": "ポイズンアヌビスより\nさらにおそろしい\nどくのファラオをおく"
        },
        "pa": [
            [
                {
                    "id": 107,
                    "variant": 2
                },
                {
                    "id": 108,
                    "variant": 2
                },
                {
                    "id": 149,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 107,
                    "variant": 3
                },
                {
                    "id": 108,
                    "variant": 3
                },
                {
                    "id": 149,
                    "variant": 4
                }
            ]
        ],
        "damage": null
    },
    {
        "section": "pa",
        "index": 27,
        "name": {
            "en": "Gater",
            "ja": "ゲートマジック"
        },
        "description": {
            "en": "Various\nthings out\nof a gate!",
            "ja": "ゲートマンのゲート\nから いろんなものが\nはっしゃされる！"
        },
        "pa": [
            [
                {
                    "id": 147,
                    "variant": 0
                },
                {
                    "id": 148,
                    "variant": 1
                },
                {
                    "id": 236,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 147,
                    "variant": 0
                },
                {
                    "id": 148,
                    "variant": 1
                },
                {
                    "id": 237,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 147,
                    "variant": 0
                },
                {
                    "id": 148,
                    "variant": 1
                },
                {
                    "id": 238,
                    "variant": 0
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 28,
        "name": {
            "en": "GtsShoot",
            "ja": "ガッツシュート"
        },
        "description": {
            "en": "GutsMan\nthrows\nMegaMan!",
            "ja": "ガッツマンが\nロックマンをなげつけ\nテキ1たいにダメージ"
        },
        "pa": [
            [
                {
                    "id": 111,
                    "variant": 0
                },
                {
                    "id": 50,
                    "variant": 2
                },
                {
                    "id": 197,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 111,
                    "variant": 0
                },
                {
                    "id": 50,
                    "variant": 2
                },
                {
                    "id": 198,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 111,
                    "variant": 0
                },
                {
                    "id": 50,
                    "variant": 2
                },
                {
                    "id": 199,
                    "variant": 0
                }
            ]
        ],
        "damage": 400
    },
    {
        "section": "pa",
        "index": 29,
        "name": {
            "en": "BigHeart",
            "ja": "ビッグハート"
        },
        "description": {
            "en": "Roll's\nheart does\nfull heal!",
            "ja": "ロールの攻撃のあと\nいやしのハートで\nHPがマックスに！"
        },
        "pa": [
            [
                {
                    "id": 179,
                    "variant": 4
                },
                {
                    "id": 129,
                    "variant": 1
                },
                {
                    "id": 194,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 179,
                    "variant": 4
                },
                {
                    "id": 129,
                    "variant": 1
                },
                {
                    "id": 195,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 179,
                    "variant": 4
                },
                {
                    "id": 129,
                    "variant": 1
                },
                {
                    "id": 196,
                    "variant": 0
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 30,
        "name": {
            "en": "BodyGrd",
            "ja": "ボディガード"
        },
        "description": {
            "en": "ShadowMan\nshoots\nshurikens!",
            "ja": "テンジョウウラから\nシャドーマンが\nごえいのシュリケン！"
        },
        "pa": [
            [
                {
                    "id": 156,
                    "variant": 4
                },
                {
                    "id": 184,
                    "variant": 4
                },
                {
                    "id": 212,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 156,
                    "variant": 4
                },
                {
                    "id": 184,
                    "variant": 4
                },
                {
                    "id": 213,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 156,
                    "variant": 4
                },
                {
                    "id": 184,
                    "variant": 4
                },
                {
                    "id": 214,
                    "variant": 0
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 31,
        "name": {
            "en": "2xHero",
            "ja": "ダブルヒーロー"
        },
        "description": {
            "en": "MegaMan &\nProtoMan,\nteamed up!",
            "ja": "ロックマンとブルース\nゆめのきょうえん！\nダブルれんだ攻撃！"
        },
        "pa": [
            [
                {
                    "id": 34,
                    "variant": 0
                },
                {
                    "id": 121,
                    "variant": 0
                },
                {
                    "id": 200,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 34,
                    "variant": 0
                },
                {
                    "id": 121,
                    "variant": 0
                },
                {
                    "id": 201,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 34,
                    "variant": 0
                },
                {
                    "id": 121,
                    "variant": 0
                },
                {
                    "id": 202,
                    "variant": 0
                }
            ]
        ],
        "damage": 70
    },
    {
        "section": "pa",
        "index": 32,
        "name": {
            "en": "Darkness",
            "ja": "ダークメシア"
        },
        "description": {
            "en": "Double\ndarkness\nattack!",
            "ja": "やみのせかいの\nさいきょうタッグ！\nダブルれんぞく攻撃！"
        },
        "pa": [
            [
                {
                    "id": 250,
                    "variant": 0
                },
                {
                    "id": 186,
                    "variant": 4
                },
                {
                    "id": 261,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 250,
                    "variant": 0
                },
                {
                    "id": 186,
                    "variant": 4
                },
                {
                    "id": 262,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 250,
                    "variant": 0
                },
                {
                    "id": 186,
                    "variant": 4
                },
                {
                    "id": 263,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 250,
                    "variant": 0
                },
                {
                    "id": 186,
                    "variant": 4
                },
                {
                    "id": 264,
                    "variant": 0
                }
            ]
        ],
        "damage": 3000
    }
]
;