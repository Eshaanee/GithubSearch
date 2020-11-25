class Github{
  constructor(){
    this.client_id='8a49bfdb9b5a9178afa4';
    this.client_secret='70aaf8d42b4d7eec89de32fd6a88b46bcf9e37d6';
    this.repos_count=5;
    this.repos_sort='created: asc';
  }

  async getUser(user){
    const profileResponse=await fetch(`https://api.github.com/users/${user}?$client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const profile=await profileResponse.json();

      const reposResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&$client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const repos=await reposResponse.json();
      return{
        profile,
        repos
      }
  }
}
