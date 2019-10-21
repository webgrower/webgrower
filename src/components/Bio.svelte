<script>
  import authors from '../dicts/authors';
  export let author
  export let authorInfo = authors[author];
</script>

<style>
  div {
    align-items: center;
    display: flex;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    /* border: 3px solid #fd6378; */
    display: block;
    margin-right: 20px;
  }

  p {
    font-size: 1.125rem;
  }
</style>

<div>
  <img src={authorInfo.avatar} alt="Nikita Makhov">
  <p>
    Hi, I'm <strong>{authorInfo.name}</strong>. {@html authorInfo.bio}
  </p>
</div>
