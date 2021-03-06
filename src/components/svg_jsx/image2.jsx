import React from "react";

function SvgComponent(props) {
  return (
    <svg width={959.5} height={502.5} {...props}>
      <defs>
        <filter id="prefix__a">
          <feFlood floodColor="#040404" floodOpacity={1} result="floodOut" />
          <feComposite
            operator="atop"
            in="floodOut"
            in2="SourceGraphic"
            result="compOut"
          />
          <feBlend in="compOut" in2="SourceGraphic" />
        </filter>
        <filter id="prefix__b">
          <feFlood floodColor="#010101" floodOpacity={1} result="floodOut" />
          <feComposite
            operator="atop"
            in="floodOut"
            in2="SourceGraphic"
            result="compOut"
          />
          <feBlend in="compOut" in2="SourceGraphic" />
        </filter>
        <filter id="prefix__c">
          <feFlood floodColor="#030303" floodOpacity={1} result="floodOut" />
          <feComposite
            operator="atop"
            in="floodOut"
            in2="SourceGraphic"
            result="compOut"
          />
          <feBlend in="compOut" in2="SourceGraphic" />
        </filter>
        <filter id="prefix__d">
          <feFlood floodColor="#020202" floodOpacity={1} result="floodOut" />
          <feComposite
            operator="atop"
            in="floodOut"
            in2="SourceGraphic"
            result="compOut"
          />
          <feBlend in="compOut" in2="SourceGraphic" />
        </filter>
        <filter id="prefix__e">
          <feFlood floodColor="#010101" floodOpacity={1} result="floodOut" />
          <feComposite
            operator="atop"
            in="floodOut"
            in2="SourceGraphic"
            result="compOut"
          />
          <feBlend in="compOut" in2="SourceGraphic" />
        </filter>
      </defs>
      <path d="M549.5 378h9a3.5 3.5 0 110 7h-9a3.5 3.5 0 110-7z" fill="none" />
      <path
        fillRule="evenodd"
        strokeWidth={4}
        stroke="#060606"
        fill="#FFF"
        d="M708 8c134.205 0 243 108.795 243 243 0 134.205-108.795 243-243 243-134.205 0-243-108.795-243-243C465 116.795 573.795 8 708 8z"
      />
      <path
        strokeWidth={4}
        stroke="#060606"
        fill="none"
        d="M708 17c129.235 0 234 104.765 234 234S837.235 485 708 485 474 380.235 474 251 578.765 17 708 17z"
      />
      <path
        fillRule="evenodd"
        fill="#010101"
        d="M889.659 236.585l13.017-3.606c13.605-3.754 23.165 2.46 24.646 14.231 1.181 9.387-3.258 13.806-21.278 16.148l-24.791 3.27c-8.484 1.143-11.71-3.446-12.234-7.618-.788-6.259 3.811-8.805 7.611-9.283 3.203-.403 8.103.646 11.112 1.1l30.785 4.679c6.4.936 7.567-7.233.683-8.411l-40.371-6.879c-7.731-1.298-12.576-3.11-13.204-8.102-.431-3.427 1.681-6.493 9.221-11.528l16.048-10.798c4.189-2.797 10.698-5.205 17.003-5.014l4.331.136c3.875.118 5.428-3.18 4.997-6.607-.525-4.172-3.964-6.237-8.21-5.703-2.086.262-5.317 1.652-6.872 2.529l-23.963 13.458c-7.28 4.095-15.076 3.486-16.088-4.56-1.228-9.76 8.457-12.189 19.26-13.548l15.719-1.977c16.763-2.109 23.202 2.152 24.29 10.794.74 5.886-1.622 11.178-8.967 15.356l-27.761 15.752c-2.616 1.465-3.322 3.067-3.144 4.483.299 2.384 2.824 3.201 8.16 1.698zm-19.728-49.85c-7.052 4.852-12.003 2.216-14.356-1.269-3.53-5.227-.578-9.576 2.596-11.719 2.676-1.807 7.52-3.085 10.409-4.039l29.577-9.734c6.131-2.056 3.482-9.871-3.191-7.811l-39.121 12.102c-7.484 2.335-12.624 2.907-15.439-1.262-1.933-2.863-1.434-6.552 3.017-14.45l9.438-16.883c2.473-4.388 7.191-9.476 12.902-12.155l3.925-1.835c3.51-1.645 3.405-5.289 1.472-8.151-2.353-3.485-6.353-3.774-9.9-1.378-1.742 1.176-3.996 3.876-4.987 5.36l-15.296 22.832c-4.645 6.941-11.874 9.921-16.412 3.2-5.505-8.152 2.037-14.694 11.06-20.786l13.129-8.866c14.001-9.455 21.67-8.563 26.545-1.345 3.319 4.916 3.603 10.704-1.062 17.75L856.59 152.89c-1.673 2.488-1.579 4.237-.781 5.419 1.345 1.991 3.967 1.58 8.047-2.172l9.984-9.097c10.439-9.496 21.776-8.272 28.415 1.56 5.294 7.841 3.33 13.787-11.687 24.018l-20.637 14.117zm-40.825-71.742c-8.086 12.025-19.022 12.815-32.543 3.722-12.586-8.463-16.157-21.722-8.196-33.561l13.575-20.187c4.651-6.916 9.091-8.002 13.827-4.818 6.667 4.483 3.468 12.738-2.497 15.151l-15.29 6.186c-5.11 2.083-6.5 6.034-4.081 10.375L808 115c7.614 5.038 12.213.683 15-4 1.427-2.652 4-14 4-14 2.142-7.421 2.87-12.701 5-18 .55-1.367 3.738-3.887 7-3 3.882 1.055 3.659 1.074 6 3 3.089 2.541 3.522 7.096-.181 12.628l-15.713 23.365zM787.98 65.862l-26.249 23.673c-4.293 3.892-10.118 8.189-15.298 6.645-10.578-3.152-7.213-18.915 4.228-15.506l6.764 2.016c4.893 1.458 5.105-.83 4.454-2.59l-13.328-36.25c-1.222-3.263-4.391-2.092-4.177.871l.729 9.383c.295 4.006-1.312 5.72-3.851 5.826-1.114.059-2.749-1.29-2.919-3.612-.554-7.608 5.538-22.794 16.044-19.663 4.101 1.222 5.444 3.816 7.259 9.292l8.245 25.177c1.577 4.701 3.838 2.632 4.452.308l5.171-19.455c2.692-10.088 18.977-4.53 15.845 5.191-.951 2.929-4.39 6.057-7.369 8.694zm-96.197 15.624c-2.356 5.294-5.948 11.578-11.311 12.259-10.95 1.39-14.24-14.39-2.396-15.893l7.002-.889c5.065-.643 4.334-2.821 3.028-4.169l-26.838-27.777c-2.435-2.492-4.861-.14-3.469 2.484l4.458 8.289c1.888 3.545 1.11 5.763-1.169 6.885-.996.505-3.037-.069-4.13-2.125-3.58-6.736-4.142-23.089 6.734-24.469 4.245-.539 6.521 1.291 10.394 5.568L691.8 61.35c3.342 3.664 4.575.858 4.198-1.516l-3.13-19.887c-1.612-10.317 15.531-11.811 16.593-1.652.314 3.063-1.569 7.313-3.229 10.93l-14.449 32.261zm-36.49 16.222c-5.505 3.079-9.591-.229-11.46-3.571-1.576-2.819-2.442-7.754-3.151-10.713l-7.215-30.292c-1.534-6.283-9.544-4.299-8.052 2.524l8.773 40.002c1.698 7.654 1.836 12.824-2.555 15.279-3.015 1.686-6.649.879-14.146-4.221l-16.031-10.823c-4.165-2.833-8.84-7.963-11.029-13.879l-1.499-4.066c-1.344-3.635-4.984-3.837-7.999-2.151-3.671 2.052-4.294 6.014-2.206 9.75 1.026 1.835 3.527 4.308 4.923 5.42l21.468 17.161c6.527 5.212 8.888 12.667 1.81 16.624-8.586 4.801-14.472-3.264-19.785-12.768l-7.732-13.829c-8.245-14.747-6.712-22.314.89-26.565 5.178-2.895 10.97-2.692 17.599 2.549l25.019 19.821c2.339 1.875 4.09 1.929 5.335 1.233 2.097-1.173 1.908-3.82-1.488-8.201l-8.227-10.714c-8.586-11.201-6.414-22.395 3.942-28.185 8.258-4.617 14.019-2.161 22.953 13.664l12.334 21.752c4.243 7.435 1.2 12.147-2.471 14.199zm-63.164 40.009c-3.54 5.219-8.674 4.096-11.843 1.947-2.672-1.812-5.659-5.834-7.619-8.161l-20.031-23.835c-4.188-4.926-10.456.438-6.064 5.866l25.777 31.814c4.949 6.078 7.391 10.637 4.568 14.8-1.939 2.858-5.548 3.766-14.534 2.571l-19.18-2.485c-4.992-.664-11.469-3.151-16.078-7.457l-3.163-2.961c-2.832-2.646-6.175-1.194-8.113 1.664-2.36 3.48-1.141 7.3 2.401 9.702 1.74 1.18 5.084 2.268 6.83 2.636l26.879 5.71c8.17 1.731 13.622 7.334 9.072 14.045-5.521 8.139-14.397 3.571-23.406-2.539l-13.111-8.891c-13.98-9.481-16.004-16.931-11.116-24.139 3.329-4.909 8.596-7.324 16.87-5.613l31.246 6.494c2.931.627 4.519-.11 5.32-1.29 1.348-1.989-.008-4.269-5.007-6.662l-12.156-5.885c-12.695-6.16-15.773-17.137-9.115-26.955 5.309-7.829 11.559-8.216 26.638 1.919l20.775 13.908c7.126 4.741 6.519 10.317 4.16 13.797zm-64.227 49.317c19.283 3.882 27.411 14.862 23.958 32.01-3.438 17.075-15.181 24.053-34.464 20.171-19.283-3.882-27.116-14.802-23.679-31.877 3.453-17.148 14.902-24.186 34.185-20.304zm-26.645 31.165c-3.541 5.414-.647 10.821 6.701 10.079l33.721-3.549c4.064-.407 6.779-4.762 4.03-8.225l-19.566-24.157c-2.514-3.11-5.974-3.041-8.083.211l-16.803 25.641zm32.187 28.306c8.383-1.724 11.917 2.631 12.728 6.756 1.216 6.188-3.196 9.045-6.953 9.783-3.168.623-8.127-.086-11.159-.331l-31.03-2.548c-6.447-.493-7.049 7.736-.101 8.436l40.742 4.082c7.801.762 12.758 2.237 13.728 7.172.666 3.389-1.23 6.592-8.404 12.134l-15.264 11.875c-3.986 3.079-10.312 5.929-16.614 6.173l-4.33.162c-3.872.149-5.194 3.546-4.528 6.935.811 4.125 4.382 5.948 8.582 5.123 2.062-.405 5.189-2.015 6.679-2.996l22.976-15.074c6.979-4.586 14.797-4.515 16.361 3.441 1.897 9.65-7.596 12.74-18.278 14.839l-15.543 3.055c-16.575 3.258-23.292-.549-24.971-9.094-1.144-5.82.847-11.261 7.886-15.934l26.606-17.624c2.508-1.641 3.103-3.288 2.828-4.688-.464-2.357-3.038-2.999-8.257-1.132l-12.736 4.493c-13.311 4.682-23.275-.858-25.563-12.497-1.824-9.283 2.3-13.995 20.113-17.572l24.502-4.969zm345.554 41.026l-1.775 6.831c-1.284 4.942 1.01 5.072 2.746 4.36l35.755-14.604c3.217-1.336 1.934-4.462-1.019-4.143l-9.351 1.061c-3.993.437-5.763-1.109-5.958-3.642-.099-1.112 1.191-2.794 3.506-3.046 7.583-.822 22.975 4.728 20.218 15.337-1.076 4.143-3.62 5.576-9.029 7.584l-24.868 9.132c-4.642 1.742-2.495 3.928-.151 4.46l19.626 4.478c10.177 2.334 5.2 18.805-4.627 16.019-2.96-.847-6.208-4.172-8.949-7.057l-24.588-25.393c-4.04-4.153-8.541-9.821-7.182-15.053 2.776-10.683 18.648-7.878 15.646 3.676z"
      />
      <image
        x={502}
        y={355}
        width={411}
        height={130}
        xlinkHref="data:img/png;base64,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"
      />
      <path
        fillRule="evenodd"
        strokeWidth={4}
        stroke="#040404"
        fill="#FFF"
        d="M701 330c50.81 0 92-41.19 92-92 0-20.72 2.558-59.621-9-75-4.15-5.522-18.314-.781-23.579-5.239C744.391 144.186 723.651 132 701 132c-23.058 0-46.135 12.483-62.28 26.497-5.285 4.589-13.595-1.167-17.72 4.503-6.644 9.134-9.67 34.297-11 51-.88 11.05-1 15.956-1 24 0 50.81 41.19 92 92 92z"
      />
      <g filter="url(#prefix__a)">
        <path
          fillRule="evenodd"
          strokeWidth={4}
          stroke="#030303"
          d="M737.934 257.019c-.217 2.613-1.008 5.047-2.412 7.278-1.589 2.525-3.69 4.595-6.069 6.405-3.332 2.534-7.015 4.469-10.898 6.046-9.279 3.767-18.996 5.559-28.985 6.106-.863.047-1.726.09-2.589.135-1.756 0-5.563-.041-5.711-.052-2.613-.183-5.232-.309-7.839-.559-4.335-.416-8.607-1.212-12.818-2.306-5.125-1.33-10.073-3.106-14.716-5.639-3.317-1.809-6.39-3.94-8.936-6.73-2.82-3.091-4.588-6.658-4.885-10.832-.344-4.853 1.17-9.104 4.568-12.657 2.834-2.963 6.353-4.633 10.493-5.01 0 0 2.805-.328 4.617-.155 2.136.204 4.179.835 6.179 1.576 4.585 1.701 9.209 3.281 13.966 4.465 3.495.87 7.024 1.563 10.629 1.775 4.611.272 9.181-.122 13.714-.967 4.252-.793 8.357-2.076 12.382-3.61 3.252-1.239 6.517-2.395 10.006-2.844 1.874-.242 3.73-.414 5.614-.083 6.854 1.205 12.319 6.588 13.48 13.318.107.622.182 1.249.272 1.874 0 .724-.053 2.367-.062 2.466z"
        />
      </g>
      <path
        fillRule="evenodd"
        fill="#FFF"
        d="M662.646 275.502c-.145-.373-.083-.714.045-1.241.34-1.41.531-2.201.943-3.02 1.676-3.33 5.254-6.133 5.254-6.133 1.201-.941 6.145-4.668 14.249-6.264 4.213-.831 8.731-.977 8.987-.127.091.305-.425.527-2.213 2.352a23.624 23.624 0 00-2.04 2.388c-.808 1.077-1.456 2.107-1.043 2.885.331.623 1.184.79 1.331.816 1.334.236 2.914-.778 3.976-2.524 2.456-3.31 5.222-5.042 6.807-5.879 6.021-3.181 12.094-2.478 15.607-2.071.788.091 4.408.542 8.528 2.355 1.512.665 3.979 1.904 5.709 4.281.592.813.683 1.19.699 1.479.11 1.953-3.039 3.447-6.102 5.09-6.67 3.578-12.314 5.267-13.292 5.555-1.852.543-7.231 2.051-14.455 2.872-4.454.506-7.663.531-13.684.576-.791.006-3.518-.113-8.971-.352 0 0-3.609-.158-8.239-1.669-.535-.174-1.755-.49-2.096-1.369z"
      />
      <image
        x={748}
        y={143}
        width={30}
        height={21}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAANCAQAAAAHrFboAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAhAQKRlX02OQAAAA70lEQVQoz3WQMUvEQBCF3weCV0tsrohtUFsh7VldZSvmT4iV/+hEsAlphEPU0tofEIS7ajsVRGIci0ziGrn3mlnm29k3CxqUqtBM+9pVo5Ve9KBr1YpF55QFX9jILQtSesbhE14HILj78xtnMXxO61hFzgQhEnJKv/LNRQ8f0mAYT2S/D7oz7h0/7SfPWFMy/YcKMaX0MGmfeYfEmwUVNTUVxYA/YhhXKJ4yYRktFlh6/oyA0bIXw8d8jH7jzjtdlMu/CY94Zo4QcwJG8DA5hnE7Xmh7qDq88oABYyU2O2Cso/pzS5t1owM1Xr8rkX4AGdJtJq0CG14AAAAASUVORK5CYII="
      />
      <image
        x={667}
        y={119}
        width={32}
        height={24}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAQAAACmLXceAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAhAQKRrO2jIqAAABHUlEQVQoz4WSsUoDQRRF7wGLfIBpUmywC35BsNMqlW1wGz9BtMlf2NnbmGAlyzbCIprSD7AOQgRhOtMEzOZZ7Et2N8Hk3WYec+68O8OAahUp1qmO1dSvpvrUmx41qRGUihiywDaUMyQqqRI/52cNBdeqn3GxabgidzSlSwMhDumSuG3JddXQZ4lhvNNBG+rw6pb+yhAxwzASWlu4EC0SDxYVhgcMY7zGY1ImTEiJ15YxhjFCok2OETxMg6xy2UDm9+kQMHLaYuBxirOyrVd68Z0i1kA8YxhdDxMwAj2E6HkX+4xbbjgTU4zgg9MKLsQJd1xyVH0CMccI3n5V1v/ooPZP5nrSULurFqmx+/Riwoe+da+FT9hb0FTYj5X1B7iQhhi++Yp2AAAAAElFTkSuQmCC"
      />
      <image
        x={560}
        y={233}
        width={235}
        height={79}
        xlinkHref="data:img/png;base64,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"
      />
      <image
        x={787}
        y={214}
        width={77}
        height={61}
        xlinkHref="data:img/png;base64,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"
      />
      <g filter="url(#prefix__b)">
        <path
          fillRule="evenodd"
          fill="#6AD03C"
          d="M768.115 292.78c-1.663-1.235-3.52-1.176-5.254-1.121-.878.028-2.852.111-5.132 1.148-3.064 1.393-3.134 2.897-5.79 4.595-3.502 2.238-7.278 2.116-8.306 2.051-4.842-.31-8.097-3.182-9.177-4.229-7.465-5.239-12.189-4.963-19.169 1.122-7.112 6.204-12.679 6.312-20.003 1.171-7.134-5.002-13.86-4.864-20.836 1.22-7.36 6.414-12.411 6.078-19.45 1.139-7.465-5.238-13.292-4.676-20.003 1.172l15.793 11.805c4.407 3.295 12.702 7.543 23.456 11.422 6.108 2.203 11.312 4.08 18.74 4.896 1.411.155 7.637.792 16.682-.311 16.581-2.023 28.662-8.193 31.684-9.792 14.489-7.666 23.702-17.658 28.65-23.923-.29-.624-.85-1.597-1.885-2.365z"
        />
      </g>
      <path
        fillRule="evenodd"
        strokeWidth={3}
        stroke="#010101"
        fill="#FFF"
        d="M649 142c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12z"
      />
      <path
        strokeWidth={3}
        stroke="#010101"
        fill="none"
        d="M649 148a6 6 0 110 12 6 6 0 010-12z"
      />
      <path
        fillRule="evenodd"
        strokeWidth={3}
        stroke="#010101"
        fill="#FFF"
        d="M723 128c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12z"
      />
      <path
        strokeWidth={3}
        stroke="#010101"
        fill="none"
        d="M723 134a6 6 0 110 12 6 6 0 010-12z"
      />
      <g filter="url(#prefix__c)">
        <path
          fillRule="evenodd"
          d="M788 252c3.866 0 7 3.358 7 7.5 0 4.142-3.134 7.5-7 7.5s-7-3.358-7-7.5c0-4.142 3.134-7.5 7-7.5z"
        />
      </g>
      <path
        fillRule="evenodd"
        stroke="#030303"
        strokeWidth={4}
        fill="#FFF"
        d="M722 182c11.598 0 21 12.088 21 27 0 9.674-3.957 18.16-9.904 22.927-.57 0-7.022-2.927-11.096-2.927-4.111 0-10.418 2.857-11.184 2.857C704.919 227.076 701 218.626 701 209c0-14.912 9.402-27 21-27z"
      />
      <g filter="url(#prefix__d)">
        <path
          fillRule="evenodd"
          d="M722.193 185c5.622 0 8.978 5.823 10.025 18.132.076 0-7.929 5.739-7.929 5.739s8.821 4.071 8.706 4.071c-.817 6.875-2.268 10.21-4.978 14.058-.296 0-2.978.294-5.096.294-2.138 0-4.699 1.706-5.096 1.706-3.068-4.404-5.825-11.262-5.825-20.129 0-13.736 7.486-23.871 10.193-23.871z"
        />
      </g>
      <path
        fillRule="evenodd"
        strokeWidth={4}
        stroke="#040404"
        d="M706.504 235.004l-1.382-2.663 8.374-4.345 1.382 2.663-8.374 4.345zM738.496 235.004l1.382-2.663-8.374-4.345-1.382 2.663 8.374 4.345z"
      />
      <path
        fillRule="evenodd"
        stroke="#030303"
        strokeWidth={4}
        fill="#FFF"
        d="M647 182c11.598 0 21 12.088 21 27 0 9.674-3.957 18.16-9.904 22.927-.57 0-7.022-2.927-11.096-2.927-4.111 0-10.418 2.857-11.184 2.857C629.918 227.076 626 218.626 626 209c0-14.912 9.402-27 21-27z"
      />
      <g filter="url(#prefix__e)">
        <path
          fillRule="evenodd"
          d="M647.193 185c5.622 0 8.978 5.823 10.025 18.132.076 0-7.929 5.739-7.929 5.739s8.821 4.071 8.706 4.071c-.817 6.875-2.268 10.21-4.978 14.058-.296 0-2.978.294-5.096.294-2.138 0-4.699 1.706-5.096 1.706-3.068-4.404-5.825-11.262-5.825-20.129 0-13.736 7.486-23.871 10.193-23.871z"
        />
      </g>
      <path
        fillRule="evenodd"
        strokeWidth={4}
        stroke="#010101"
        d="M631.504 235.004l-1.382-2.663 8.374-4.345 1.382 2.663-8.374 4.345z"
      />
      <path
        fillRule="evenodd"
        strokeWidth={4}
        stroke="#000"
        d="M663.496 235.004l1.382-2.663-8.374-4.345-1.382 2.663 8.374 4.345z"
      />
    </svg>
  );
}

export default SvgComponent;
