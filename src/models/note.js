export default class Note {
    #id;
    #title;
    #content;
    #tags;
  
    constructor({ id, title, content, tags }) {
      if (!id) {
        throw 'Missing note Id';
      }
      this.#id = id;
      this.#title = title || '';
      this.#content = content || '';
      this.#tags = tags || [];
    }
  
    get id() {
      return this.#id;
    }
  
    get title() {
      return this.#title;
    }
  
    get content() {
      return this.#content;
    }
  
    get tags() {
      return this.#tags;
    }
  
    getJSData() {
      return {
        title: this.#title,
        content: this.#content,
        tags: this.#tags,
      };
    }
  }