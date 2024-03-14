import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

function Profile() {
  return (
    <div className="Profile" id="profile-outer-container">
      <Sidebar
        pageWrapId={"profile-page-wrap"}
        outerContainerId={"profile-outer-container"}
      />
      <Header />
      <div className="page-wrap" id="profile-page-wrap">
        <h1>My Profile</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          sagittis, orci ut ultrices lacinia, massa mauris viverra purus, eu
          egestas felis ligula id magna. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Ut interdum sem sem, in scelerisque eros
          efficitur quis. Nulla lacus libero, volutpat quis erat vel, egestas
          vulputate nulla. Maecenas vulputate, risus aliquet hendrerit
          ultricies, nibh elit sollicitudin odio, imperdiet pellentesque neque
          turpis mattis eros. Fusce sit amet eros elementum, rutrum odio et,
          faucibus mi. Nullam mollis magna non nisi vulputate bibendum. Ut
          dapibus sapien vitae nulla tincidunt ornare. Sed ac fermentum mi, sed
          elementum dolor. Vivamus malesuada gravida libero sit amet aliquam.
          Nunc luctus ut risus in tincidunt. Aenean a metus sed sapien
          scelerisque facilisis vel vel libero. Duis molestie urna nec nisl
          commodo, id dapibus purus aliquam. Suspendisse potenti. Morbi porta,
          metus finibus commodo semper, purus nisl ornare odio, et mollis urna
          neque a orci. Aliquam tempor porttitor purus, eu pulvinar dolor porta
          et. Etiam egestas luctus justo, id tincidunt elit placerat a.
          Suspendisse vel eros ac eros pharetra molestie. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut
          viverra, libero vel ornare sodales, orci arcu egestas mi, ut faucibus
          velit augue sit amet justo. Proin venenatis elit nunc, non lobortis
          mauris auctor id. Quisque sed dui a purus rhoncus molestie et sed
          urna. Nunc eleifend at massa dictum fringilla. Vestibulum viverra ut
          arcu eget tincidunt. Nam eleifend fringilla posuere. Cras ac tortor
          congue, luctus dolor vitae, condimentum lectus. Curabitur erat eros,
          malesuada a mattis quis, maximus in lectus. Praesent vehicula nunc non
          ante iaculis, faucibus pharetra ipsum venenatis. In vitae posuere
          massa, eget feugiat diam. Proin tempus in ante et posuere. Sed
          pulvinar volutpat lacus in laoreet. Sed porta placerat lacinia.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Integer gravida tortor sit amet lacus
          vestibulum molestie. Cras semper eleifend finibus. Donec vel ultricies
          turpis. Nullam dignissim nec est sed pharetra. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Etiam quis purus eu arcu auctor scelerisque ut eget nisl.
          Quisque tristique justo sagittis, ornare enim eu, feugiat tortor.
          Fusce ullamcorper maximus lacus, ac porta tellus dignissim sit amet.
          Maecenas mi dolor, condimentum vitae tristique a, volutpat sit amet
          dui. Nulla volutpat nisl vel est finibus, bibendum condimentum velit
          facilisis. Ut hendrerit enim nec odio imperdiet, ut pharetra dolor
          elementum. Integer est dolor, tincidunt quis mauris ac, volutpat
          mattis nulla. Vestibulum pellentesque, ex ut elementum semper, nisl
          lorem lacinia velit, eu tristique dolor lorem ac nulla. Fusce ac ante
          ante. Aenean sed neque non nunc semper ultrices at eleifend felis.
          Praesent viverra volutpat egestas. Aenean et mi efficitur, auctor nunc
          ut, ultrices ligula. Curabitur et ligula sit amet est dictum
          elementum. Aliquam tincidunt commodo fringilla. Nunc tincidunt
          ultricies nunc eu viverra. Etiam quis pulvinar dui. Aenean imperdiet
          eros quis purus placerat, eget congue enim imperdiet. Etiam at massa
          orci. Nullam imperdiet purus ut arcu vestibulum, quis vehicula sem
          lacinia. Etiam faucibus arcu ac malesuada elementum. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Vivamus hendrerit purus nisl, vitae molestie ipsum consequat
          at. Quisque condimentum ac urna ac gravida. Sed ut arcu porttitor
          sapien mollis facilisis eget vitae tortor. Curabitur vel ipsum magna.
          Etiam sit amet finibus massa. Curabitur bibendum ullamcorper lorem,
          nec pulvinar magna tincidunt eget. Etiam laoreet id nisi id elementum.
          Aenean ac magna nulla. Ut justo ante, tincidunt id est ac, rutrum
          dapibus eros. Aenean vitae tincidunt risus. Cras mollis efficitur
          iaculis. In nec erat ut odio ullamcorper cursus. Proin blandit vel
          velit sit amet euismod. Proin eu sapien gravida, interdum felis eu,
          mattis ante. Maecenas gravida mollis libero et feugiat. Aliquam
          posuere tortor sit amet nisl suscipit, sed congue tellus accumsan.
          Vestibulum tincidunt est quis lectus placerat, nec fermentum diam
          tempus. Nulla facilisi. Cras in nibh ut sapien placerat molestie
          lacinia eget eros. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Mauris mattis, turpis sit amet egestas luctus, nibh mi euismod
          arcu, nec finibus lorem turpis eget odio. Fusce lacinia auctor
          sollicitudin. Curabitur commodo, turpis ut commodo porttitor, nulla
          quam dapibus quam, non auctor turpis metus eget lectus. Nam ut massa
          vel arcu euismod hendrerit. Aenean suscipit sagittis sapien, vel
          maximus nisi rutrum at. Vestibulum sagittis tempor blandit. Morbi
          sagittis elit varius sapien gravida, vel placerat neque maximus. Nunc
          ut ligula metus. Morbi mollis urna eu hendrerit ullamcorper. Aliquam
          porttitor urna ac dui convallis bibendum a sit amet lectus. Etiam
          sodales justo a risus pulvinar, porta luctus leo interdum. Nullam sed
          risus massa. Pellentesque tempor dignissim consequat. Nulla dignissim
          dolor eu velit elementum, vel luctus felis lacinia. Nullam sit amet
          commodo odio. Ut eu urna sapien. Nullam ullamcorper imperdiet mauris
          in scelerisque. Donec risus lorem, imperdiet non neque ac, vulputate
          dignissim velit. Cras volutpat dictum nunc eu auctor. Suspendisse
          lobortis leo eros. Pellentesque blandit purus orci, ac hendrerit risus
          pharetra quis. Quisque sollicitudin, nunc eget imperdiet lobortis,
          metus libero pulvinar ipsum, sed consequat est elit eu leo. Aliquam
          auctor congue orci id consequat. In purus mauris, scelerisque nec est
          et, feugiat sollicitudin arcu. Nunc ac gravida velit. Curabitur id
          auctor turpis, sed commodo dui. Quisque leo purus, consequat nec urna
          et, dictum ullamcorper risus. Nulla libero orci, facilisis vitae odio
          interdum, ultrices euismod odio. Integer dignissim elementum
          convallis. Phasellus nec quam sapien. Praesent non ligula lacinia,
          volutpat nunc vitae, venenatis metus. Donec laoreet augue sed est
          iaculis tempus. Nulla auctor nibh quis quam luctus, in mattis odio
          rhoncus. Sed fermentum urna vel justo vestibulum, at bibendum arcu
          sodales. Maecenas maximus porta lacinia. Aenean facilisis erat
          facilisis ultrices commodo. Vivamus fringilla egestas mauris, sed
          fringilla enim sollicitudin non. Quisque feugiat diam a nulla
          placerat, at sagittis felis rutrum. Sed sem enim, placerat ac rhoncus
          ut, porta sit amet eros. Aliquam sit amet feugiat nisl. Mauris odio
          mi, bibendum vitae mi sit amet, vestibulum varius magna. Donec at
          consectetur turpis.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
