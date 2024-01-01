document.addEventListener('alpine:init', () => {
    // main section
    Alpine.data('scrollToTop', () => ({
        showTopButton: false,
        init() {
            window.onscroll = () => {
                this.scrollFunction();
            };
        },

        scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                this.showTopButton = true;
            } else {
                this.showTopButton = false;
            }
        },

        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    }));

    // theme customization
    Alpine.data('customizer', () => ({
        showCustomizer: false,
    }));

    // sidebar section
    Alpine.data('sidebar', () => ({
        init() {
            const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
            if (selector) {
                selector.classList.add('active');
                const ul = selector.closest('ul.sub-menu');
                if (ul) {
                    let ele = ul.closest('li.menu').querySelectorAll('.nav-link');
                    if (ele) {
                        ele = ele[0];
                        setTimeout(() => {
                            ele.click();
                        });
                    }
                }
            }
        },
    }));

    // header section
    Alpine.data('header', () => ({
        init() {
            const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
            if (selector) {
                selector.classList.add('active');
                const ul = selector.closest('ul.sub-menu');
                if (ul) {
                    let ele = ul.closest('li.menu').querySelectorAll('.nav-link');
                    if (ele) {
                        ele = ele[0];
                        setTimeout(() => {
                            ele.classList.add('active');
                        });
                    }
                }
            }
        },

        notifications: [
            {
                id: 1,
                profile: 'avatar.svg',
                message: '<strong class="text-sm mr-1">User Name</strong>invite you to <strong>Prototyping</strong>',
                time: '45 min ago',
            },
            {
                id: 2,
                profile: 'avatar.svg',
                message: '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
                time: '9h Ago',
            },
            {
                id: 3,
                profile: 'avatar.svg',
                message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
                time: '9h Ago',
            },
        ],

        messages: [
            {
                id: 1,
                image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
                title: 'Congratulations!',
                message: 'Your OS has been updated.',
                time: '1hr',
            },
            {
                id: 2,
                image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-info-light dark:bg-info text-info dark:text-info-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
                title: 'Did you know?',
                message: 'You can switch between artboards.',
                time: '2hr',
            },
            {
                id: 3,
                image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-danger-light dark:bg-danger text-danger dark:text-danger-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
                title: 'Something went wrong!',
                message: 'Send Reposrt',
                time: '2days',
            },
            {
                id: 4,
                image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
                title: 'Warning',
                message: 'Your password strength is low.',
                time: '5days',
            },
        ],

        languages: [
            {
                id: 3,
                key: 'English',
                value: 'en',
            },{
                id: 16,
                key: 'Arabic',
                value: 'omr',
            },
        ],

        removeNotification(value) {
            this.notifications = this.notifications.filter((d) => d.id !== value);
        },

        removeMessage(value) {
            this.messages = this.messages.filter((d) => d.id !== value);
        },
    }));

    Alpine.data('auth', () => ({
        languages: [
                {
                id: 3,
                key: 'English',
                value: 'en',
            },{
                id: 16,
                key: 'Arabic',
                value: 'omr',
            },
        ],
    }));

    //notes
    Alpine.data('notes', () => ({
        defaultParams: {
            id: null,
            title: '',
            description: '',
            tag: '',
            user: '',
            thumb: '',
        },
        isAddNoteModal: false,
        isDeleteNoteModal: false,
        isViewNoteModal: false,
        params: {
            id: null,
            title: '',
            description: '',
            tag: '',
            user: '',
            thumb: '',
        },
        isShowNoteMenu: true,
        notesList: [
            {
                id: 1,
                user: 'User Name',
                thumb: 'avatar.svg',
                title: 'Meeting with Kelly',
                description: 'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.',
                date: '11/01/2023',
                isFav: false,
                tag: 'personal',
            },
            {
                id: 2,
                user: 'User Name',
                thumb: '',
                title: 'Receive Package',
                description: 'Facilisis curabitur facilisis vel elit sed dapibus sodales purus.',
                date: '11/02/2023',
                isFav: true,
                tag: '',
            },
            {
                id: 3,
                user: 'User Name',
                thumb: 'avatar.svg',
                title: 'Download Docs',
                description: 'Proin a dui malesuada, laoreet mi vel, imperdiet diam quam laoreet.',
                date: '11/04/2023',
                isFav: false,
                tag: 'work',
            },
            {
                id: 4,
                user: 'User Name',
                thumb: 'avatar.svg',
                title: 'Meeting at 4:50pm',
                description: 'Excepteur sint occaecat cupidatat non proident, anim id est laborum.',
                date: '11/08/2023',
                isFav: false,
                tag: '',
            },
            {
                id: 5,
                user: 'User Name',
                thumb: 'avatar.svg',
                title: 'Backup Files EOD',
                description: 'Maecenas condimentum neque mollis, egestas leo ut, gravida.',
                date: '11-09-2023',
                isFav: false,
                tag: '',
            },
            {
                id: 6,
                user: 'User Name',
                thumb: 'avatar.svg',
                title: 'Download Server Logs',
                description: 'Suspendisse efficitur diam quis gravida. Nunc molestie est eros.',
                date: '11-09-2023',
                isFav: false,
                tag: 'social',
            },
            {
                id: 7,
                user: 'User Name',
                thumb: '',
                title: 'Team meet at Starbucks',
                description: 'Etiam a odio eget enim aliquet laoreet lobortis sed ornare nibh.',
                date: '11-12-2023',
                isFav: false,
                tag: '',
            },
            {
                id: 8,
                user: 'User Name',
                thumb: '',
                title: 'Create new users Profile',
                description: 'Duis aute irure in nulla pariatur. Etiam a odio eget enim aliquet.',
                date: '31-12-2023',
                isFav: false,
                tag: 'important',
            },
        ],
        filterdNotesList: '',
        selectedTab: 'all',
        deletedNote: null,
        selectedNote: {
            id: null,
            title: '',
            description: '',
            tag: '',
            user: '',
            thumb: '',
        },

        init() {
            this.searchNotes();
        },

        searchNotes() {
            if (this.selectedTab != 'fav') {
                if (this.selectedTab != 'all' || this.selectedTab === 'delete') {
                    this.filterdNotesList = this.notesList.filter((d) => d.tag === this.selectedTab);
                } else {
                    this.filterdNotesList = this.notesList;
                }
            } else {
                this.filterdNotesList = this.notesList.filter((d) => d.isFav);
            }
        },

        saveNote() {
            if (!this.params.title) {
                this.showMessage('Title is required.', 'error');
                return false;
            }
            if (this.params.id) {
                //update task
                let note = this.notesList.find((d) => d.id === this.params.id);
                note.title = this.params.title;
                note.user = this.params.user;
                note.description = this.params.description;
                note.tag = this.params.tag;
            } else {
                //add note
                let maxNoteId = this.notesList.length
                    ? this.notesList.reduce((max, character) => (character.id > max ? character.id : max), this.notesList[0].id)
                    : 0;
                if (!maxNoteId) {
                    maxNoteId = 0;
                }
                let dt = new Date();
                let note = {
                    id: maxNoteId + 1,
                    title: this.params.title,
                    user: this.params.user,
                    thumb: 'profile-21.jpeg',
                    description: this.params.description,
                    date: dt.getDate() + '/' + Number(dt.getMonth()) + 1 + '/' + dt.getFullYear(),
                    isFav: false,
                    tag: this.params.tag,
                };
                this.notesList.splice(0, 0, note);
                this.searchNotes();
            }

            this.showMessage('Note has been saved successfully.');
            this.isAddNoteModal = false;
            this.searchNotes();
        },

        tabChanged(type) {
            this.selectedTab = type;
            this.searchNotes();
            this.isShowNoteMenu = false;
        },

        setFav(note) {
            let item = this.filterdNotesList.find((d) => d.id === note.id);
            item.isFav = !item.isFav;
            this.searchNotes();
        },

        setTag(note, name) {
            let item = this.filterdNotesList.find((d) => d.id === note.id);
            item.tag = name;
            this.searchNotes();
        },

        deleteNoteConfirm(note) {
            setTimeout(() => {
                this.deletedNote = note;
                this.isDeleteNoteModal = true;
            });
        },

        viewNote(note) {
            setTimeout(() => {
                this.selectedNote = note;
                this.isViewNoteModal = true;
            });
        },

        editNote(note) {
            this.isShowNoteMenu = false;
            setTimeout(() => {
                this.params = JSON.parse(JSON.stringify(this.defaultParams));
                if (note) {
                    this.params = JSON.parse(JSON.stringify(note));
                }
                this.isAddNoteModal = true;
            });
        },

        deleteNote() {
            this.notesList = this.notesList.filter((d) => d.id != this.deletedNote.id);
            this.searchNotes();
            this.showMessage('Note has been deleted successfully.');
            this.isDeleteNoteModal = false;
        },

        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: type,
                title: msg,
                padding: '10px 20px',
            });
        },
    }));
});