//////////////////////////////////////PERSONAL MENU APP//////////////////////////////////////
class Spells {
    constructor (name, attribute) {
        this.name = name;
        this.attribute = attribute;
    }

    describe() {
        return `${this.name}: ${this.attribute}`;
    }
}

class PreparedSpellList {
    constructor (name) {
        this.name = name;
        this.spellList = [];
    }

    addSpell(newSpell) {
        if (newSpell instanceof Spells){
            this.spellList.push(newSpell);
        } else {
            throw new Error(`You can only add an instance of Spells. Entered data ${newSpell} is not an instance of the correct class.`);
        }

    }

    describe() {
        return `Spell list contains ${this.spellList.length} spells`;
    }   
}

class Menu {
    constructor() {
        this.spellLists = [];
        this.chosenSpellList = null;
    }

    start() {
        let pick = this.showTopMenuOptions();

        while (pick != 0) {
            switch (pick) {
                case '1':
                    this.createPreparedSpellList();
                    break;
                case '2':
                    this.ManagePreparedSpellList();
                    break;
                case '3':
                    this.deletePreparedSpellList();
                    break;
                case '4':
                    this.viewPreparedSpellLists();
                    break;
                default:
                    pick = 0;
            }
            pick = this.showTopMenuOptions();
        }

        alert(`happy casting!`);
    }

    showTopMenuOptions() {
        return prompt(`
        0) Exit
        1) Create new Spell list
        2) Manage Spell list
        3) Delete Spell list
        4) Display all Spell lists
        `);
    }

    showSpellListMenuOptions(spellListDetails) {
        return prompt(`
        0) Exit Spell List Menu
        1) Create Spell
        2) Remove Spell
        ----------------------
        ${spellListDetails}
        `);
    }

    createPreparedSpellList() {
        let list = prompt('What will this Spell list be called');
        this.spellLists.push(new PreparedSpellList(list));
        console.log(`${this.spellLists[this.spellLists.length -1].name}`)
    }

    ManagePreparedSpellList() {
        let PreparedSpellListString = '';
        for (let i = 0; i < this.spellLists.length; i++) {
            PreparedSpellListString += i + ') ' + this.spellLists[i].name + '\n';
        }
        let index = prompt('List of Lists: ' + '\n'
        + PreparedSpellListString + '\n'
        + 'Enter the number for the list you would like to view.');
        if (index > -1 && index < this.spellLists.length) {
            this.chosenSpellList = this.spellLists[index]
            console.log(`you have selected to manage ${this.chosenSpellList.name}`);
            //if (this.chosenSpellList === 'undefined')
            let info = 'Spell List: ' + this.chosenSpellList.name + '\n';

            for (let i = 0; i < this.chosenSpellList.spellList.length; i++) {
                info += i + ') ' + this.chosenSpellList.spellList[i].name + ': ' 
                + this.chosenSpellList.spellList[i].attribute + '\n';
            }
            console.log(info);
            let selection = this.showSpellListMenuOptions(info);
            while (selection != 0) {
                switch (selection) {
                    case '1':
                        this.createSpell();
                        if (index > -1 && index < this.spellLists.length) {
                            this.chosenSpellList = this.spellLists[index]
                            let info = 'Spell List: ' + this.chosenSpellList.name + '\n';
                
                            for (let i = 0; i < this.chosenSpellList.spellList.length; i++) {
                                info += i + ') ' + this.chosenSpellList.spellList[i].name + ': ' 
                                + this.chosenSpellList.spellList[i].attribute + '\n';
                            }
                            selection = this.showSpellListMenuOptions(info);
                        }
                        break;
                    case '2':
                        this.removeSpell();
                        if (index > -1 && index < this.spellLists.length) {
                            this.chosenSpellList = this.spellLists[index]
                            let info = 'Spell List: ' + this.chosenSpellList.name + '\n';
                
                            for (let i = 0; i < this.chosenSpellList.spellList.length; i++) {
                                info += i + ') ' + this.chosenSpellList.spellList[i].name + ': ' 
                                + this.chosenSpellList.spellList[i].attribute + '\n';
                            }
                            selection = this.showSpellListMenuOptions(info);
                        }
                        break; ///I will test why this was commented out.
                    default:
                        if (index > -1 && index < this.spellLists.length) {
                            this.chosenSpellList = this.spellLists[index]
                            let info = 'Spell List: ' + this.chosenSpellList.name + '\n';
                
                            for (let i = 0; i < this.chosenSpellList.spellList.length; i++) {
                                info += i + ') ' + this.chosenSpellList.spellList[i].name + ': ' 
                                + this.chosenSpellList.spellList[i].attribute + '\n';
                            }
                            selection = this.showSpellListMenuOptions(info);
                        }
                    }
                    //selection = this.showSpellListMenuOptions(info);
                }
            } else {
            alert('no entry specified');
        }
    }

    deletePreparedSpellList() {
        if (this.spellLists.length > 0) {
        let index = prompt('Enter the index of the Spell list you wish to delete.');
        if (index > -1 && index < this.spellLists.length) {
            this.spellLists.splice(index, 1);
        }
    } else {
        alert('No Prepared Spell lists to delete');
    }
    }

    viewPreparedSpellLists() {
        let PreparedSpellListString = '';
        console.log('view spell list');
        if (this.spellLists.length > 0) {
        for (let i = 0; i < this.spellLists.length; i++) {
            PreparedSpellListString += i + ') ' + this.spellLists[i].name + '\n';
        }
        alert(PreparedSpellListString);
    } else {
        alert('No Prepared Spell lists to view');
    }
    }

    createSpell() {
        let newSpell = prompt('what is the name of your new spell?');
        let newSpellAttribute = prompt('what does your new spell do?');
        this.chosenSpellList.spellList.push(new Spells(newSpell, newSpellAttribute));

    }

    removeSpell(){
        if (this.chosenSpellList.spellList.length > 0) {
            let oldspell = prompt(`Enter the index of the spell you would like to remove from this list.`);
            if (oldspell > -1 && oldspell < this.chosenSpellList.spellList.length) {
                this.chosenSpellList.spellList.splice(oldspell, 1);
            }
        }else {
            alert('No spells to remove from the selected list');
        }
    } 
}

let menu = new Menu();
menu.start();